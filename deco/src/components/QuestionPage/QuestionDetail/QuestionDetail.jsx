import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
// import { ReactComponent as lik } from "@/assets/profile.svg";
import axios from "axios";

const {
  container,
  topic,
  profileImege,
  nickName,
  like,
  tagBox,
  textTitle,
  uploadImage,
  mainText,
} = styles;

const DetailPage = () => {
  let [editMode, setEditMode] = useState(false);

  let id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("id", "user1");
    getData("get");
  }, []);

  // 게시글 조회 구현
  const getData = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/question/${id.id}`);
      let data = await response.data;
      setData(data);
    } catch (error) {
      // navigate("/*");
      console.log("404 Error");
    }
  };
  let [data, setData] = useState([]);

  let { title, content, image, user, category, hashTag, like, hits } = data;

  return (
    <div className={container}>
      <div>
        <span className={topic}>{category}</span>
        <h2 className={textTitle}>{title}</h2>
        {user?.image === "" ? (
          <Profile className={profileImege} />
        ) : (
          <img src={user?.image} className={profileImege} alt="exampleImage1" />
        )}
        <span className={nickName}>{user?.nickname}</span>
        <p className={mainText}>{content}</p>
        <img src={image} className={uploadImage} alt="" />
        <div className={tagBox}>
          {hashTag?.map((item, index) => {
            return <span key={index}>#{item}</span>;
          })}
        </div>
      </div>

      <button className={styles.likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      <Comment />
    </div>
  );
};

export default DetailPage;
