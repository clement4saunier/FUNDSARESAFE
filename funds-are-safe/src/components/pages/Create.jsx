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
    // const [select, setSelect] = useState("");
    console.log("adresse = ", account);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    // const handleSelectChange = (evt) => {
    //     setSelect(evt.target.value)
    //     console.log(select)
    // }
    
    if (account) {
        return (
            <Page>
                <br />
                <h1><span style={{"color":"#23C4AA"}}>LAUNCH</span> <u>YOUR PROJECT</u></h1>
                <br />
                <br />
                <ProjectInfo/>
                <h2>TELL THE PEOPLE</h2>
                <textarea className={styles.markdown} placeholder="The details of your project, why it'll be worht it (full markdown)"/>
                <button className={styles.button64}><span>Mint your project</span></button>
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
