import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import emptyPicture from "@/assets/empty_picture.png";
import Comment from "@/components/Common/Comment/Comment";
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
  const id = useParams();
  const [props, setProps] = useState("");
  const getData = async () => {
    const response = await axios.get(`http://localhost:3001/question/${id.id}`);
    const data = await response.data;
    setProps(data);
  };
  const { title, date, user, category, hashTag, like, hits } = props;
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={container}>
      <span className={topic}>{category}</span>
      <h2 className={textTitle}>{title}</h2>
      <img
        src={user?.image || emptyPicture}
        className={profileImege}
        alt="exampleImage1"
      />
      <span className={nickName}>{user?.nickname}</span>
      <p className={mainText}>
        redux와 recoil이 상태를 관리하기 위한 라이브러리로 알고 있는데 둘의
        차이점 장단점이 궁금합니다.redux와 recoil이 상태를 관리하기 위한
        라이브러리로 알고 있는데 둘의 차이점 장단점이 궁금합니다.redux와
        recoil이 상태를 관리하기 위한 라이브러리로 알고 있는데 둘의 차이점
        장단점이 궁금합니다.redux와 recoil이 상태를 관리하기 위한 라이브러리로
        알고 있는데 둘의 차이점 장단점이 궁금합니다.redux와 recoil이 상태를
        관리하기 위한 라이브러리로 알고 있는데 둘의 차이점 장단점이
        궁금합니다.redux와 recoil이 상태를 관리하기 위한 라이브러리로 알고
        있는데 둘의 차이점 장단점이 궁금합니다.redux와 recoil이 상태를 관리하기
        위한 라이브러리로 알고 있는데 둘의 차이점 장단점이 궁금합니다.
      </p>
      <img className={uploadImage} src={emptyPicture} alt="exampleImage2" />
      <img className={uploadImage} src={emptyPicture} alt="exampleImage3" />
      <div className={tagBox}>
        <span>#React</span>
        <span>#React</span>
        <span>#React</span>
      </div>
      <button className={like}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      <Comment />
    </div>
  );
};

export default DetailPage;
