import React from "react";
import styles from "./css/ButtonsContainer.module.css";

export default function ButtonsContainer({ onButtonClick }) {
  const buttonName = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9", // Numbers
    ".", // Decimal point
    "+",
    "-",
    "*",
    "/", // Operators
    "C",
    "=", // Clear and Equals
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}

      {/* <button className={styles.button}>C</button>
      <button className={styles.button}>C</button>
      <button className={styles.button}>C</button> */}
    </div>
  );
}
