import React from "react";
import styles from "./css/Display.module.css";

export default function Display({ DisplayValue }) {
  return (
    <input
      type="text"
      className={styles.display}
      value={DisplayValue}
      readOnly
    />
  );
}
