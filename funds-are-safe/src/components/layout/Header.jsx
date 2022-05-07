import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header() {
    let navigate = useNavigate();

    function onFundButton() {
        navigate("/funding");
    }

    function onCreateButton() {
        navigate("/create");
    }

    function onTitleButton() {
        navigate("/");
    }

    return (
        <header>
            <div onClick={onTitleButton} style={{cursor: "pointer"}}>
                FUNDSARESAFE
            </div>
            <div>
                <button onClick={onFundButton}>Fund</button>
                <button onClick={onCreateButton}>Create</button>
            </div>
            <div>
                //Identity
            </div>
        </header>
    )
}