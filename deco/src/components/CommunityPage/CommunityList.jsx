import React from "react";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import HashTag from "../Common/HashTag/HashTag";
import SearchForm from "../Common/SearchForm/SearchForm";
import Sort from "../Common/Sort/Sort";
import styles from "./CommunityList.module.css";

const CommunityList = () => {
  return (
    <>
      <BoardBanner
        boardName="커뮤니티"
        boardGuide="다양한 사람을 만나고 생각의 폭을 넓혀 보세요."
        write="작성하기"
        path="/community/write"
      />
      <SearchForm />
      <div className={styles.hashTagContainer}>
        <HashTag content="React" />
        <HashTag content="JavaScript" />
        <HashTag content="HTML " />
      </div>
      <Sort />
    </>
  );
};

export default CommunityList;
