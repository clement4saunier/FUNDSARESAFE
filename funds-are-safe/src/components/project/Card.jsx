import { BigNumber } from "ethers";
import React from "react";
import { useNavigate } from "react-router-dom";
import useStartonProject from "../hooks/useStartonProject";
import styles from "./Card.module.css";

export default function Card({ id }) {
  const { metadata, goal, fund, token, ongoing } = useStartonProject(id);

  let navigate = useNavigate();

  function onCardClick() {
    navigate("/funding/" + id);
  }

  return (
    <div
      onClick={onCardClick}
      style={{ cursor: "pointer" }}
      className={styles.card}
    >
      <div>
        <h2>{metadata?.name ?? "..."}</h2>
        ongoing: {ongoing ? "true" : "false"}
        <br />
        token: {token}
        <br />
        funding: {fund && BigNumber.from(fund).toString()}/
        {goal && BigNumber.from(goal).toString()}
      </div>
      <div>
        {metadata && (
          <img
            alt="campaign-preview"
            src={"https://ipfs.io/ipfs/" + metadata.image}
          ></img>
        )}
      </div>
    </div>
  );
}
