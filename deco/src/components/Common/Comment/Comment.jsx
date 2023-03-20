import React from "react";
import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
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