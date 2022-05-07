import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/Wallet";
import styles from "./Header.module.css";
import useWalletRequest from "../hooks/useWalletRequest";

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  const { account } = useContext(WalletContext);
  const { requestAccounts } = useWalletRequest();

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
      <div
        className={
          location.pathname === "/funding" ? styles.selected : styles.casual
        }
        onClick={onTitleButton}
        style={{ cursor: "pointer" }}
      >
        <h2>
          <a>QUICK</a>
          STARTER
        </h2>
      </div>
      <div>
        <button
          className={
            location.pathname === "/funding" ? styles.selected : styles.casual
          }
          onClick={onFundButton}
        >
          FUND
        </button>
        <button
          className={
            location.pathname === "/create" ? styles.selected : styles.casual
          }
          onClick={onCreateButton}
        >
          CREATE
        </button>
      </div>
      <div>
        <button onClick={requestAccounts}>{account ?? "Connect Wallet"}</button>
      </div>
    </header>
  );
}
