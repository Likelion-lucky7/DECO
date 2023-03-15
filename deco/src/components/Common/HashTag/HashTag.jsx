import React from "react";
import { Link } from "react-router-dom";
import styles from "./HashTag.module.css";

const HashTag = ({ contentPath = "/", content = "" }) => {
  return (
    <Link className={styles.hashtag} to={contentPath}>
      &#35;{content}
    </Link>
  );
};

export default HashTag;
