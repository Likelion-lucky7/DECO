import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShortcutButton.module.css";

const ShortcutButton = ({ to, ...restProps }) => {
  return (
    <div className={styles.container}>
      <Link to={to} className={styles.button} {...restProps}>
        바로가기
      </Link>
    </div>
  );
};

export default ShortcutButton;
