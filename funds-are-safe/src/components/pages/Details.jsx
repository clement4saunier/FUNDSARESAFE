import { BigNumber, Contract } from "ethers";
import { Interface } from "ethers/lib/utils";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WalletContext } from "../context/Wallet";
import useStartonProject from "../hooks/useStartonProject";
import useWallet from "../hooks/useWallet";
import Page from "../layout/Page";
import styles from "./Details.module.css";
import LoadingBar from "./details/LoadingBar";
import { erc20Contract } from "../../contract/contract";
import ReactMarkdown from "react-markdown";
import { useCallback } from "react";
import { erc20Contracts } from "../../contract/contract";

export default function Details() {
  let { id } = useParams();
  const { fundingContract, provider, account, chainId } = useContext(WalletContext);
  const { metadata, goal, fund, token, owner, ongoing } = useStartonProject(id);
  const [funded, setFunded] = useState("0%");
  const [amount, setAmount] = useState(1);
  const [tokenContract, setTokenContract] = useState();
  const isOwner =
    account && owner && account.toLowerCase() === owner.toLowerCase();

  function onInputChange(event) {
    setAmount(parseInt(event.target.value));
  }

  useEffect(() => {
    if (!token || !provider) return;

    setTokenContract(
      new Contract(
        token,
        new Interface(erc20Contract.abi),
        provider.getSigner()
      )
    );
  }, [token]);

  useEffect(() => {
    if (!goal || !fund) return;

    setFunded(parseInt((fund / goal) * 100).toString() + "%");
  }, [goal, fund]);

  async function onFundButton() {
    await fundingContract.fund(id, amount, { gasLimit: 1000000 });
  }

  async function onApproveButton() {
    if (!tokenContract) return;

    await tokenContract.approve(fundingContract.address, amount);
  }

  async function onWithdrawButton() {
    if (!tokenContract) return;

    await fundingContract.withdrawFunds(id);
  }

  return (
    <Page>
      <br />
      <br />
      <div className={[styles.card, "panel-shadow"].join(" ")}>
        <div className={styles.mediaCard}>
          {metadata && (
            <img
              className={styles.media}
              alt="campaign-media"
              src={"https://ipfs.io/ipfs/" + metadata.image}
            />
          )}
        </div>
        <h1>{metadata?.name ?? "..."}</h1> by {owner ?? "..."}
        <br/>
        <br/>
        <br/>
        <div className={styles.funding}>
          <LoadingBar value={funded} />
          <div className="panel">{funded}</div>
        </div>
        <br />
        {account ? (chainId === 3 ? <div className={styles.fundIt}>
          <button onClick={onFundButton}>Fund it!</button>
          <button onClick={onApproveButton}>Approve</button>
          <input onChange={onInputChange} placeholder="amount"></input>
        </div> : <div className={styles.fundIt}>Connect to Ropsten Network to fund this project</div>) : <div className={styles.fundIt}>Connect your wallet to fund</div>}
      </div>
      <br />
      {isOwner && !ongoing && (
        <div className={[styles.card, "panel-shadow"].join(" ")}>
          Congratulations ! You're project has been successfully funded, you can
          now withdraw your funds.
          <br />
          <br />
          <button onClick={onWithdrawButton}>
            Withdraw {fund}{" "}
            {erc20Contracts.find(({ address: a }) => a === token)?.name}
          </button>
        </div>
      )}
      {ongoing !== undefined && !ongoing && (
        <div className={[styles.card, "panel-shadow"].join(" ")}>
          This campaign ended !
        </div>
      )}
      <br />
      <div className={[styles.card, styles.markdown, "panel-shadow"].join(" ")}>
        {metadata && <ReactMarkdown>{metadata.description}</ReactMarkdown>}
      </div>
    </Page>
  );
}
