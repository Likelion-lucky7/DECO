import React from "react";
import AnswerEditor from "../AnswerEditor/AnswerEditor";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import styles from "@/components/Common/Comment/Comment.module.css";

const Comment = () => {
  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>
      <AnswerEditor />
    </>
  );
};

export default Comment;
