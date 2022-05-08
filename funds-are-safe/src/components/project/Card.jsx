import { BigNumber } from "ethers";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({
  project: [metadata, ongoing, token, goal, fund]
}) {
  let navigate = useNavigate();

 function onCardClick() {
    navigate("/funding/0")
  }

  return (
    <div onClick={onCardClick} style={{cursor: "pointer"}} className={styles.card}>
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
