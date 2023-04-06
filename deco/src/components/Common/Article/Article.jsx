import styles from "./Article.module.css";
import Hashtag from "../Hashtag/Hashtag";
import QuestionCategory from "@/components/QuestionPage/QuestionCategory";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { ReactComponent as LoveIcon } from "@/assets/loveIcon.svg";
import { Link } from "react-router-dom";

const Article = ({ item, kind }) => {
  const { title, createdAt, user, category, hashTag, like, hits, id } = item;

  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    return `${date.getFullYear() + "-" + month + "-" + day}`;
  }

  let date = dateFormat(new Date(createdAt));

  return (
    <article className={styles.container}>
      <div className={styles.userAndDate}>
        <div className={styles.userInfo}>
          {user?.profile === "" || user?.profile === undefined ? (
            <Profile />
          ) : (
            <img src={user?.profile} alt="유저 프로필 사진입니다" />
          )}
          <span>{user?.nickname}</span>
        </div>
        <div className={styles.date}>작성일 {date}</div>
      </div>

      {kind === "question" ? (
        <Link to={`/question/${id}`} className={styles.linkToDetail}>
          <h2>{title}</h2>
        </Link>
      ) : (
        <Link to={`/community/${id}`} className={styles.linkToDetail}>
          <h2>{title}</h2>
        </Link>
      )}

      <div className={styles.hashAndAdditionalInfo}>
        <div className={styles.hash} tabIndex={-1}>
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
