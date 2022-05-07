import { BigNumber } from "ethers";
import React from "react";
import styles from "./Card.module.css";

export default function Card({
  project: [metadata, ongoing, token, goal, fund]
}) {

  return (
    <div className={styles.card}>
      <h2></h2>
      <p>
        metadata: {metadata}
        <br />
        ongoing: {ongoing ? "true" : "false"}
        <br />
        token: {token}
        <br />
        funding: {BigNumber.from(fund).toString()}/{BigNumber.from(goal).toString()}
      </p>
    </div>
  );
}
