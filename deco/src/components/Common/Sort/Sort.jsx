import React from "react";
import styles from "./Sort.module.css";

const Sort = () => {
  return (
    <div className={styles.container}>
      <button className={styles.sortNew} type="button">
        최신순
      </button>
      <button className={styles.sortRecommendation} type="button">
        추천순
      </button>
    </div>
  );
};

export default Sort;
