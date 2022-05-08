import React, { useState } from "react";
import Page from "../layout/Page";
import { WalletContext } from "../context/Wallet";
import { useContext } from "react";
import FormField from "../project/FormField";
import Select from "react-select";
import styles from "./Create.module.css";
import ProjectInfo from "./create/ProjectInfo";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export default function Create() {
  const { account } = useContext(WalletContext);
  const [projectInfo, setProjectInfo] = useState({});
  const [markdown, setMarkdown] = useState("");

  async function onUpload() {
    const { file, name, goal, token } = projectInfo;
    console.log("projectInfo:", projectInfo);
    console.log("markdown:", markdown);
    const ipfsImage = await client.add(projectInfo.file);
    const metadata = {
      name,
      image: ipfsImage.path,
      goal,
      token
    };
    console.log("metadata", metadata);
  }

  if (account) {
    return (
      <Page>
        <br />
        <h1>
          <span style={{ color: "#23C4AA" }}>#1 DESCRIBE</span> <u>YOUR PROJECT</u>
        </h1>
        <br />
        <h2>BROADLY</h2>
        <ProjectInfo
          onStateChange={(v) => {
            setProjectInfo(v);
          }}
        />
        <h2>IN DETAILS</h2>
        <textarea
          className={styles.markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="The details of your project, why it'll be worht it (full markdown)"
        />
        <button onClick={onUpload} className={styles.button64}>
          <span>Mint your project</span>
        </button>
        <h1>
          <span style={{ color: "#23C4AA" }}>#1 UPLOAD</span> TO IPFS
        </h1>
      </Page>
    );
  } else {
    console.log("not connected");
    return <Page>Connect you to create a project</Page>;
  }
}
