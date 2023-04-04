import { useState } from "react";
import { useRecoilState } from "recoil";
import { getQuestion } from "@/@store/getQuestionData";
import Article from "@/components/Common/Article/Article";
import BoardBanner from "@/components/Common/BoardBanner/BoardBanner";
import Category from "@/components/Common/Category/Category";
import Hashtag from "@/components/Common/Hashtag/Hashtag";
import Pagination from "@/components/Common/Pagination/Pagination";
import SearchForm from "@/components/Common/SearchForm/SearchForm";
import Sort from "@/components/Common/Sort/Sort";
import styles from "./QuestionList.module.css";

const QuestionList = () => {
  let questionData = useRecoilState(getQuestion);
  let originalData = questionData[0]
    .filter((item) => item.id !== undefined)
    .sort(function (a, b) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  let [filteredData, setFilteredData] = useState([...originalData]);
  let [category, setCategory] = useState("전체");

  const onClickCategory = async (e) => {
    e.preventDefault();
    if (e.target.name == "all") {
      setCategory("전체");
    }
    if (e.target.name == "기술") {
      setCategory("기술");
    }

    if (e.target.name == "커리어") {
      setCategory("커리어");
    }
  };

  const onClickSort = async (e) => {
    e.preventDefault();

    if (e.target.name == "like") {
      let arr = [...originalData];
      let newArr = arr.sort(function (a, b) {
        return b.like - a.like;
      });
      setFilteredData(newArr);
    }

    if (e.target.name == "new") {
      setFilteredData(originalData);
    }
  };
  return (
    <>
      <BoardBanner
        boardName="묻고 답하기"
        boardGuide="좋은 질문과 답변을 통해 함께 성장해요."
        write="질문하기"
        path="/question/write"
      />

      <Category category1="기술" category2="커리어" onClick={onClickCategory} />

      <SearchForm />

      <div className={styles.hashtagContainer}>
        <Hashtag content="React" />
        <Hashtag content="JavaScript" />
        <Hashtag content="HTML " />
      </div>

      <Sort onClick={onClickSort} />

      {category == "전체"
        ? filteredData.map((item) => {
            return <Article key={item?.id} item={item} />;
          })
        : filteredData
            .filter((item) => item.category === category)
            .map((item) => {
              return <Article key={item?.id} item={item} />;
            })}

      <Pagination />
    </>
  );
};

export default QuestionList;
