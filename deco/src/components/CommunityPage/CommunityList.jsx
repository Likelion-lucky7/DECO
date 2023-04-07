import { useState } from "react";
import { getCommunity } from "@/@store/getCommunityData";
import { useRecoilState } from "recoil";
import Article from "@/components/Common/Article/Article";
import BoardBanner from "@/components/Common/BoardBanner/BoardBanner";
import Hashtag from "@/components/Common/Hashtag/Hashtag";
import Pagination from "@/components/Common/Pagination/Pagination";
import SearchForm from "@/components/Common/SearchForm/SearchForm";
import Sort from "@/components/Common/Sort/Sort";
import styles from "./CommunityList.module.css";

const CommunityList = () => {
  const communityData = useRecoilState(getCommunity);
  const originalData = communityData[0]
    .filter((item) => item.id !== undefined)
    .sort(function (a, b) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const [posts, setPosts] = useState([...originalData]);

  const onClickSort = (e) => {
    e.preventDefault();

    if (e.target.name === "like") {
      const arr = [...originalData];
      const sortArr = arr.sort(function (a, b) {
        return b.like - a.like;
      });

      setPosts(sortArr);
    }

    if (e.target.name === "new") {
      setPosts(originalData);
    }
  };

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
        <Hashtag content="부트캠프" />
        <Hashtag content="포트폴리오" />
        <Hashtag content="면접" />
      </div>

      <Sort onClick={onClickSort} />

      {posts.map((item) => {
        return <Article key={item.id} item={item} kind="community" />;
      })}

      <Pagination />
    </>
  );
};

export default CommunityList;
