import React, { useEffect, useState } from "react";
import styles from "./ProjectInfo.module.css";

export default function ProjectInfo({ onStateChange }) {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [token, setToken] = useState("0x65c890037ba6e2dC260111E158b33cc9941368C7");
  const [imageUrl, setImageUrl] = useState();

  function onImageUpload(e) {
    const file = e.target.files[0];
    setFile(file);
    setImageUrl(URL.createObjectURL(file));
  }

  useEffect(() => {
    onStateChange({file, name, goal, token});
  }, [file, name, goal, token]);

  return (
    <div className={styles.projectInfo}>
      <div>
        <h3>MEDIA</h3>
        <input type="file" accept="image/*" onChange={onImageUpload}></input>
        <img alt="" src={imageUrl} />
      </div>
      <div>
        <h3>NAME</h3>
        <input
          className={styles.input}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <h3>GOAL</h3>
        <select
          onChange={(e) => {
            setToken(e.target.value);
          }}
        >
          <option value="0x65c890037ba6e2dC260111E158b33cc9941368C7"> USDC</option>
          <option value="0x65c890037ba6e2dC260111E158b33cc9941368C7"> WETH</option>
          <option value="0x65c890037ba6e2dC260111E158b33cc9941368C7"> MATIC</option>
          <option value="0x65c890037ba6e2dC260111E158b33cc9941368C7"> APECOIN</option>
        </select>
        <input
          className={styles.input}
          placeholder="Amount"
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
