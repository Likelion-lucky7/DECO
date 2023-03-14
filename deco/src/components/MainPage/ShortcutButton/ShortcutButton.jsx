import React from "react";
import styles from "./ShortcutButton.module.css";

const SubmitButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>바로가기</button>
    </div>
  );
};

export default SubmitButton;
