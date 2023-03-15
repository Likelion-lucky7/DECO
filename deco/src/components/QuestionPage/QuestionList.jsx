import React from "react";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import Category from "../Common/Category/Category";
import HashTag from "../Common/HashTag/HashTag";
import SearchForm from "../Common/SearchForm/SearchForm";
import styles from "./QuestionList.module.css";

const QuestionList = () => {
  return (
    <>
      <BoardBanner
        boardName="묻고 답하기"
        boardGuide="좋은 질문과 답변을 통해 함께 성장해요."
        write="질문하기"
        path="/question/write"
      />
      <Category category1="기술" category2="커리어" />
      <SearchForm />
      <div className={styles.hashTagContainer}>
        <HashTag content="React" />
        <HashTag content="JavaScript" />
        <HashTag content="HTML " />
      </div>
    </>
  );
};

export default QuestionList;
