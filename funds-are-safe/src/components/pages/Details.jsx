import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStartonProject from "../hooks/useStartonProject";
import Page from "../layout/Page";
import styles from "./Details.module.css";
import LoadingBar from "./details/LoadingBar";

export default function Details() {
  let { id } = useParams();
  const { metadata, goal, fund } = useStartonProject(id);
  const [funded, setFunded] = useState("0%");

  useEffect(() => {
    if (!goal || !funded) return;

    if (goal?._isBigNumber && funded?._isBigNumber) {

        setFunded((fund.toNumber() / goal.toNumber()).toString() + "%");
    }
    console.log(goal, "/", fund);
  }, [goal, fund])

  function onFundButton() {

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
        <h1>{metadata?.name ?? "..."}</h1>
        <div className={styles.funding}>
            <LoadingBar value={funded}/>
            <div className="panel">
                {funded}
            </div>
        </div>
      <br />
        <div className={styles.fundIt}>
            <button onClick={onFundButton}>Fund it!</button>
            <input placeholder="amount"></input>
        </div>
      </div>
      <br/>
      <br/>
        <div className={[styles.card, "panel-shadow"].join(" ")}>
            {metadata?.description ?? "..."}
        </div>
    </Page>
  );
}
