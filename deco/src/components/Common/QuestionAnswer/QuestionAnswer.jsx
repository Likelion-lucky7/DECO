import React from "react";
import Styles from "@/components/Common/QuestionAnswer/QuestionAnswer.module.css";
import SubmitButton from "../SubmitButton/SubmitButton";

// const [] = Styles;

const QuestionAnswer = () => {
  return (
    <div className={Styles.answerWrite}>
      <h2>답변하기</h2>
      <textarea placeholder="질문에 대한 답변을 하려면 로그인을 해주세요"></textarea>
      <div className={Styles.submitButton}>
        <SubmitButton title="등록" writeButton={true} />
      </div>
    </div>
  );
};

export default QuestionAnswer;
