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
  const { account, fundingContract } = useContext(WalletContext);
  const [projectInfo, setProjectInfo] = useState({});
  const [markdown, setMarkdown] = useState("");
  const [state, setState] = useState("writing");
  const [metadata, setMetadata] = useState();

  async function onUpload() {
    const { file, name, goal, token } = projectInfo;
    console.log("projectInfo:", projectInfo);
    console.log("markdown:", markdown);
    const ipfsImage = await client.add(projectInfo.file);
    const metadata = {
      name,
      image: ipfsImage.path,
      description: markdown
    };
    console.log("metadata", metadata);
    console.log("token", token);
    const ipfsJson = await client.add(JSON.stringify(metadata));
    setMetadata({ cid: ipfsJson.path, content: metadata });
    setState("minting");
  }

  async function onMintButton() {
      console.log(projectInfo);
    console.log(await fundingContract.createFunding(
      projectInfo.token,
      projectInfo.goal,
      "https://ipfs.io/ipfs/" + metadata.cid
    ))
  }

  if (account) {
    return (
      <Page>
        <h1>
          <span style={{ color: state === "writing" ? "#23C4AA" : "" }}>
            #1 DESCRIBE
          </span>{" "}
          <u>YOUR PROJECT</u>
        </h1>
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
        <button onClick={() => setState("uploading")}>
          Confirm it's correct
        </button>
        <h1>
          <span style={{ color: state === "uploading" ? "#23C4AA" : "" }}>
            #2 UPLOAD
          </span>{" "}
          TO IPFS
        </h1>
        <p>IPFS is a decentralized file storage solution...</p>
        <button onClick={onUpload}>
          <span>Mint your project</span>
        </button>
        {metadata !== undefined && (
          <>
            File uploaded to{" "}
            <a href={"https://ipfs.io/ipfs/" + metadata.cid} target="_blank">
              {metadata.cid}
            </a>
          </>
        )}
        <h1>
          <span style={{ color: state === "minting" ? "#23C4AA" : "" }}>
            #3 MINT
          </span>{" "}
          YOUR PAGE ON-CHAIN
        </h1>
        <button onClick={onMintButton}>Mint</button>
      </Page>
    );
  } else {
    console.log("not connected");
    return <Page>Connect you to create a project</Page>;
  }
}
