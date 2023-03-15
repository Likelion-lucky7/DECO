import React from "react";
import Article from "../Common/Article/Article";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import Hashtag from "../Common/Hashtag/Hashtag";
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
      <div className={styles.hashtagContainer}>
        <Hashtag content="React" />
        <Hashtag content="JavaScript" />
        <Hashtag content="HTML " />
      </div>
      <Sort />
      <Article title="안녕하세요 저희 최종 프로젝트 완료했어요! 어떤가요?" />
    </>
  );
};

export default CommunityList;
