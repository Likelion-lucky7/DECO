import { getCommunity } from "@/@store/getCommunityData";
import React from "react";
import { useRecoilState } from "recoil";
import Article from "../Common/Article/Article";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import Hashtag from "../Common/Hashtag/Hashtag";
import Pagination from "../Common/Pagination/Pagination";
import SearchForm from "../Common/SearchForm/SearchForm";
import Sort from "../Common/Sort/Sort";
import styles from "./CommunityList.module.css";

const CommunityList = () => {
  const communityData = useRecoilState(getCommunity);
  const filteredData = communityData[0].filter((item) => item.id !== undefined);

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
        <Hashtag content="" />
        <Hashtag content="" />
        <Hashtag content="" />
      </div>
      <Sort />
      {/* {filteredData.map((item) => {
        return <Article key={item.id} item={item} />;
      })} */}
      <Pagination />
    </>
  );
};

export default CommunityList;
