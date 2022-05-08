import React from "react";
import styles from './LoadingBar.module.css'

LoadingBar.defaultProps = {
    value: "10%"
}

export default function LoadingBar({value}) {
    return (
        <div className={styles.main}>   
            {value !== "0%" && <div className={styles.bar} style={{width: value}}>
            </div>}
        </div>
    )
}