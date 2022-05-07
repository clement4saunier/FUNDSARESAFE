import React from "react";
import Card from "./Card";
import styles from "./List.module.css"

export default function List() {
    return (
        <div className={styles.list}>
            {[0,1,2].map((_, idx) => {
                return (<Card key={idx}/>)
            })}
        </div>
    )
}