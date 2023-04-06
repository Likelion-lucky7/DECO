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
        <Hashtag content="부트캠프" />
        <Hashtag content="포르폴리오" />
        <Hashtag content="면접" />
      </div>

      <Sort />

      {filteredData.map((item) => {
        return <Article key={item.id} item={item} kind="community" />;
      })}

      <Pagination />
    </>
  );
};

export default CommunityList;
