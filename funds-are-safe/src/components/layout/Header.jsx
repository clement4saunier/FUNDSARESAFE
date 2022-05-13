import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/Wallet";
import styles from "./Header.module.css";
import useWalletRequest from "../hooks/useWalletRequest";

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  const { account, chainId } = useContext(WalletContext);
  const { requestAccounts } = useWalletRequest();
  const networks = new Map([
    [1, "Mainnet"],
    [4, "Rinkeby"],
    [3, "Ropsten"]
  ]);

  function onFundButton() {
    navigate("/funding");
  }

  function onCreateButton() {
    navigate("/create");
  }

  function onTitleButton() {
    navigate("/");
  }

  return (
    <header>
      <div
        className={
          location.pathname === "/funding" ? styles.selected : styles.casual
        }
        onClick={onTitleButton}
        style={{ cursor: "pointer" }}
      >
        <h2 className={styles.logo}>
          <img alt="quickstart-logo" src="/logo192.png" />
          <a>QUICK</a>
          STARTER
        </h2>
      </div>
      <div>
        <div style={{ margin: "0 3vh" }}>
          <button
            className={
              location.pathname === "/funding" ? styles.selected : styles.casual
            }
            onClick={onFundButton}
          >
            FUNDS
          </button>
        </div>
        <div>
          <button
            className={
              location.pathname === "/create" ? styles.selected : styles.casual
            }
            onClick={onCreateButton}
          >
            CREATE
          </button>
        </div>
      </div>
      <div>
        <div className="panel">{chainId && (networks.get(chainId) ?? "Unknown")}</div>
        <div className="panel" style={{whiteSpace: "nowrap", cursor: "pointer"}} onClick={requestAccounts}>
          {account ? (account.substring(0, 7) + "...") : "Connect Wallet"}
        </div>
      </div>
    </header>
  );
}
