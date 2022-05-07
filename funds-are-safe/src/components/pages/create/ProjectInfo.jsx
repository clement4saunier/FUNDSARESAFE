import React from "react";
import styles from "./ProjectInfo.module.css";

export default function ProjectInfo() {
  return (
    <div className={styles.projectInfo}>
      <div>
        <h3>MEDIA</h3>
        <input type="file"></input>
      </div>
      <div>
        <h3>NAME</h3>
        <input className={styles.input} placeholder="Project name" />
        <br />
        <h3>GOAL</h3>
        <select>
          <option value="red"> USDC</option>
          <option value="red"> WETH</option>
          <option value="red"> MATIC</option>
          <option value="red"> APECOIN</option>
        </select>
        <input className={styles.input} placeholder="Amount" />
      </div>
    </div>
  );
}
