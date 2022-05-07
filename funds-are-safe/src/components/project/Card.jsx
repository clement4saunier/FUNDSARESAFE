import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card() {
    let navigate = useNavigate();

    function onCard() {
        navigate("/pitch");
    }
    return (
        <div className={styles.card}
        onClick={onCard}>            
            <h2>Title</h2>
            <p>This project aims to become the...</p>
        </div>
    )
}