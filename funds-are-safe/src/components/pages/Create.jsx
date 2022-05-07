import React from "react";
import Page from "../layout/Page";
import { WalletContext } from "../context/Wallet";
import { useContext } from "react";
import FormField from "../project/FormField";
import Select from 'react-select';
import styles from './Create.module.css'
import ProjectInfo from "./create/ProjectInfo";


export default function Create() {
    const { account } = useContext(WalletContext);
    console.log("adresse = ", account);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    if (account) {
        return (
            <Page>
                <h1>LAUNCH YOUR PROJECT!</h1>
                Enter the following details
                <br />
                <ProjectInfo/>
                <h2>TELL THE PEOPLE</h2>
                <input className={styles.markdown} placeholder="The details of your project, why it'll be worht it (full markdown)"/>
                <button>Mint your crowdfunding!</button>
            </Page>
        )
    } else {
        console.log("not connected");
        return (
            <Page>
                Connect you to create a project
            </Page>
        )
    }
}