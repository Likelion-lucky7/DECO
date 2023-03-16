import React from "react";
import Styles from "./QuestionAnswer.module.css";

// const [] = Styles;

const QuestionAnswer = () => {
  return (
    <div className={Styles.answerWrite}>
      <h2>답변하기</h2>
      <textarea placeholder="질문에 대한 답변을 하려면 로그인을 해주세요"></textarea>
      <button type="submit" className={Styles.submitButton}>
        등록
      </button>
    </div>
  );
};

export default QuestionAnswer;
