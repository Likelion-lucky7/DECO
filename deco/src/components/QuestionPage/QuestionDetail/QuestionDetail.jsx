import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
// import { ReactComponent as lik } from "@/assets/profile.svg";
import axios from "axios";
import Hashtag from "@/components/Common/HashTag/HashTag";

const {
  container,
  topic,
  profileImege,
  nickName,
  likeIcon,
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

  let { title, content, image, user, category, hashTag } = data;

  return (
    <div className={container}>
      <span className={topic}>{category}</span>
      <h2 className={textTitle}>{title}</h2>
      {user?.profile === "" ? (
        <Profile className={profileImege} />
      ) : (
        <img src={user?.profile} className={profileImege} alt="exampleImage1" />
      )}
      <span className={nickName}>{user?.nickname}</span>
      <p className={mainText}>{content}</p>
      <img className={uploadImage} src={image} alt="exampleImage2" />
      <img className={uploadImage} src={image} alt="exampleImage3" />
      <div className={tagBox}>
        {hashTag &&
          hashTag.map((item, index) => <Hashtag key={index} content={item} />)}
      </div>
      <button className={likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      <Comment id={id.id} />
    </div>
  );
};

export default DetailPage;
