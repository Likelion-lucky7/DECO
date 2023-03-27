import React from "react";
import styles from "./Article.module.css";
import Hashtag from "../Hashtag/Hashtag";
import QuestionCategory from "@/components/QuestionPage/QuestionCategory";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { ReactComponent as LoveIcon } from "@/assets/loveIcon.svg";
import { Link, useNavigate } from "react-router-dom";

const Article = ({ item }) => {
  const { title, date, user, category, hashTag, like, hits, id } = item;
  const navigate = useNavigate();
  const navigation = () => {
    navigate(`/question/${id}`);
  };
  return (
    <article className={styles.container}>
      <div className={styles.userAndDate}>
        <div className={styles.userInfo}>
          {user?.profile === "" || user?.profile === undefined? (
            <Profile />
            ) : (
              <img  src = {user?.profile} alt="유저 프로필 사진입니다" />
              )}
          <span>{user?.nickname}</span>

        </div>
        <div className={styles.date}>작성일 {date}</div>
      </div>
      <Link to={`/question/${id}`} className={styles.linkToDetail}>
        <h2>{title}</h2>
      </Link>
      <div className={styles.hashAndAdditionalInfo}>
        <div className={styles.hash}>
          {category ? <QuestionCategory categoryName={category} /> : null}
          {hashTag?.map((item, index) => (
            <Hashtag key={index} content={item} />
          ))}
        </div>
        <div className={styles.AdditionalInfo}>
          <LoveIcon />
          <span>{like}</span>
          <span className={styles.midpoint}>&#183;</span>
          <span>조회</span>
          <span>{hits}</span>
        </div>
      </div>
    </article>
  );
};

export default Article;
