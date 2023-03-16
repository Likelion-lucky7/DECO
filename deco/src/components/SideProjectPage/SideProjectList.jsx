import React from "react";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import Category from "../Common/Category/Category";
import Hashtag from "../Common/Hashtag/Hashtag";
import Pagination from "../Common/Pagination/Pagination";
import SearchForm from "../Common/SearchForm/SearchForm";
import Sort from "../Common/Sort/Sort";
import SideProjectCard from "./SideProjectCard";
import styles from "./SideProjectList.module.css";

const SideProjectList = () => {
  return (
    <>
      <BoardBanner
        boardName="사이드 프로젝트"
        boardGuide="나에게 맞는 프로젝트나 스터디/모임을 찾아 참여해보세요."
        write="모집하기"
        path="/sideproject/write"
      />
      <Category category1="프론트엔드" category2="백엔드" />
      <SearchForm />
      <div className={styles.hashtagContainer}>
        <Hashtag content="React" />
        <Hashtag content="JavaScript" />
        <Hashtag content="HTML " />
      </div>
      <Sort />
      <div className={styles.container}>
        <SideProjectCard />
        <SideProjectCard />
        <SideProjectCard />
      </div>
      <Pagination />
    </>
  );
};

export default SideProjectList;
