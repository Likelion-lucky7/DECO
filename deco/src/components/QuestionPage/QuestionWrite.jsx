import React from "react";
import WriteInput from "@/components/Common/WriteInput/WriteInput";
import styles from "./QuestionWrite.module.css";

const QuestionWrite = () => {
  return (
    <div className={styles.container}>
      <WriteInput />
    </div>
  );
};

export default QuestionWrite;
