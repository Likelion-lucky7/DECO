import React from "react";
import styles from "./Article.module.css";
import Hashtag from "../Hashtag/Hashtag";
import QuestionCategory from "@/components/QuestionPage/QuestionCategory";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { ReactComponent as LoveIcon } from "@/assets/loveIcon.svg";
import { Link } from "react-router-dom";

const Article = ({ title = "" }) => {
  return (
    <article className={styles.container}>
      <div className={styles.userAndDate}>
        <div className={styles.userInfo}>
          <Profile />
          <span>닉네임</span>
        </div>
        <div className={styles.date}>작성일 2023.03.11</div>
      </div>
      <h2>
        <Link to="">{title}</Link>
      </h2>
      <div className={styles.hashAndAdditionalInfo}>
        <div className={styles.hash}>
          <QuestionCategory categoryName="기술" />
          <Hashtag content="React" />
          <Hashtag content="JavaScript" />
        </div>
        <div className={styles.AdditionalInfo}>
          <LoveIcon />
          <span>3</span>
          <span className={styles.midpoint}>&#183;</span>
          <span>조회</span>
          <span>5</span>
        </div>
      </div>
    </article>
  );
};

export default Article;
