import { create } from "ipfs-http-client";
import React, { useState } from "react";
import styles from "./ProjectInfo.module.css";

export default function ProjectInfo() {
  const [imageUrl, setImageUrl] = useState();

  function onImageUpload(e) {
    const file = e.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  }
  return (
    <div className={styles.projectInfo}>
      <div>
        <h3>MEDIA</h3>
        <input type="file" onChange={onImageUpload}></input>
        <img alt="" src={imageUrl} />
      </div>
      <div>
        <h3>NAME</h3>
        <input className={styles.input} placeholder="Name" />
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
