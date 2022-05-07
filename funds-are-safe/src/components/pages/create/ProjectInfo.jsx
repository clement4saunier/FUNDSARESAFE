import React from "react";
import styles from "./ProjectInfo.module.css";

export default function ProjectInfo() {
  return (
    <div className={styles.projectInfo}>
      <div>
          <h3>MEDIA</h3>
      </div>
      <div>
        <h3>NAME</h3>
        <input className={styles.input} placeholder="Project name" />
        <br />
        <h3>GOAL</h3>
        <input className={styles.input} placeholder="Currency" />
        <input className={styles.input} placeholder="Goal" />
      </div>
    </div>
  );
}
