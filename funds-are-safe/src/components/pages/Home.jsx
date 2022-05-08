import React from "react";
import Page from "../layout/Page";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <Page>
            <div className={styles.container}>
                <div style={{ "marginBottom": "7 vh", "marginLeft": "-15vw", "width": "90%" }}>
                    <h1>Finance projects,<br />the <span style={{ "color": "#008770" }}>decentralized</span> way</h1>
                    <h2>An on-chain crowdfunding plateform<br />completely decentralized and managed by smart contracts</h2><br />
                </div>
                <div style={{ "marginBottom": "7vh", "marginLeft": "-11vw", "fontSize": "20pt", "fontFamily": "Share Tech Mono", "width": "90%" }}>
                    <h2><span style={{ "color": "#008770" }}>Dedicated</span> funding page</h2>
                    <p>The service generates a dedicated website hosted on IPFS to present your project and engage people.</p>
                </div>
                <div style={{ "marginBottom": "7vh", "marginLeft": "-11vw", "fontSize": "20pt", "fontFamily": "Share Tech Mono", "width": "90%" }}>
                    <h2><span style={{ "color": "#008770" }}>Raise</span> Funds in crypto</h2>
                    <p>Raise funds in USDC, WETH, MATIC and much more !</p>
                </div>
                <div style={{ "marginLeft": "-11vw", "fontSize": "20pt", "fontFamily": "Share Tech Mono", "width": "90%" }}>
                    <h2><span style={{ "color": "#008770" }}>Achieve</span> your goal</h2>
                    <p>You will be able to unlock your</p>
                </div>
            </div>
        </Page>
    )
}
