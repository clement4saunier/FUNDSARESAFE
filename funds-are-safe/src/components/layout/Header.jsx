import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();

  console.log(location);

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
        FUNDSARESAFE
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
      <div>//Identity</div>
    </header>
  );
}
