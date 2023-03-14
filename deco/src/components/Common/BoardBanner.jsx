import React from "react";
import styles from "./BoardBanner.module.css";

const BoardBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBanner}>
        <h2>묻고 답하기</h2>
        <p>좋은 질문과 답변을 통해 함께 성장해요.</p>
      </div>
      <div className={styles.writeButton}>
        <button type="button">
          <img src="" alt="" />
          <span>질문하기</span>
        </button>
      </div>
    </div>
  );
};

export default BoardBanner;
