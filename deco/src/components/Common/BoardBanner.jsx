import React from "react";
import styles from "./BoardBanner.module.css";
import { ReactComponent as Icon } from "@/assets/writeIcon.svg";

const BoardBanner = ({
  boardName = "",
  boardGuide = "",
  write = "",
  path = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBanner}>
        <h2>{boardName}</h2>
        <p>{boardGuide}</p>
      </div>
      <div>
        <a href={path} className={styles.write}>
          <Icon />
          {write}
        </a>
      </div>
    </div>
  );
};

export default BoardBanner;
