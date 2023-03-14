import React from "react";
import BoardBanner from "../Common/BoardBanner";

const QuestionList = () => {
  return (
    <BoardBanner
      boardName="묻고 답하기"
      boardGuide="좋은 질문과 답변을 통해 함께 성장해요."
      write="질문하기"
      path="/question/write"
    />
  );
};

export default QuestionList;
