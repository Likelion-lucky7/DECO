import React from "react";
import styles from "./BoardBanner.module.css";
import { ReactComponent as Icon } from "@/assets/writeIcon.svg";
import { Link } from "react-router-dom";

const BoardBanner = ({
  boardName = "",
  boardGuide = "",
  write = "",
  path = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.mainBanner}>
          <h2>{boardName}</h2>
          <p>{boardGuide}</p>
        </div>
        <div>
          <Link to={path} className={styles.write}>
            <Icon />
            {write}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoardBanner;
