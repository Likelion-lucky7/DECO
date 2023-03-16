import React from "react";
import { useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/likeActivate.svg";
import emptyPicture from "@/assets/empty_picture.png";
import Comment from "@/components/Common/Comment/Comment";

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
  let id = useParams();
  // console.log(id);
  return (
    <div className={container}>
      <span className={topic}>기술</span>
      <h2 className={textTitle}>redux와 recoil의 차이가 무엇인가요?</h2>
      <img src={emptyPicture} className={profileImege} alt="exampleImage1" />
      <span className={nickName}>닉네임</span>
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
      </button>
      <Comment />
    </div>
  );
};

export default DetailPage;
