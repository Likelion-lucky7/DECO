import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getQuestion } from "@/@store/getQuestionData";
import Article from "@/components/Common/Article/Article";
import BoardBanner from "@/components/Common/BoardBanner/BoardBanner";
import Category from "@/components/Common/Category/Category";
import Hashtag from "@/components/Common/Hashtag/Hashtag";
import Pagination from "@/components/Common/Pagination/Pagination";
import SearchForm from "@/components/Common/SearchForm/SearchForm";
import Sort from "@/components/Common/Sort/Sort";
import styles from "./QuestionList.module.css";
import { authUser } from "@/@store/user";

const QuestionList = () => {
  const questionData = useRecoilValue(getQuestion);
  const originalData = questionData
    .filter((item) => item.id !== undefined)
    .sort(function (a, b) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const [isUser, setIsUser] = useRecoilState(authUser);
  const [posts, setPosts] = useState([...originalData]);
  const [currentPage, setCurrentPage] = useState(1); // 페이지
  const [postsPerPage, setPostsPerPage] = useState(2); // 한 페이지에 보일 게시글 갯수
  const [category, setCategory] = useState("전체");

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);

    return currentPosts;
  };

  const onClickCategory = async (e) => {
    e.preventDefault();
    if (e.target.name === "all") {
      setCategory("전체");
      setPosts(originalData);
      setCurrentPage(1);
    }

    if (e.target.name === "기술") {
      setCategory("기술");

      const categoryList = originalData.filter(
        (item) => item.category === "기술",
      );

      setPosts(categoryList);
      setCurrentPage(1);
    }

    if (e.target.name === "커리어") {
      setCategory("커리어");

      const categoryList = originalData.filter(
        (item) => item.category === "커리어",
      );

      setPosts(categoryList);
      setCurrentPage(1);
    }
  };

  const onClickSort = async (e) => {
    e.preventDefault();

    if (e.target.name == "like") {
      const arr = [...originalData];
      const newArr = arr.sort(function (a, b) {
        return b.like.length - a.like.length;
      });
      setPosts(newArr);
    }

    if (e.target.name == "new") {
      setPosts(originalData);
    }
  };

  return (
    <>
      <BoardBanner
        boardName="묻고 답하기"
        boardGuide="좋은 질문과 답변을 통해 함께 성장해요."
        write="질문하기"
        path={!isUser ? "/login" : "/question/write"}
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
        ? currentPosts(posts).map((item) => {
            return <Article key={item?.id} item={item} kind="question" />;
          })
        : currentPosts(posts)
            .filter((item) => item.category === category)
            .map((item) => {
              return <Article key={item?.id} item={item} kind="question" />;
            })}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default QuestionList;
