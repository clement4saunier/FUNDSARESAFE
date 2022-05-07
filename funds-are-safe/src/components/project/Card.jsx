import React from "react";
import styles from "./Card.module.css"

export default function Card() {
    return (
        <div className={styles.card}>
            <h2>Title</h2>
            <p>This project aims to become the...</p>
        </div>
    )
}