import React from "react";
import styles from "./QuestionDetail.module.css";
import { ReactComponent as LogOut_Like } from "@/assets/likeDisable.png";
import emptyPicture from "../../../assets/empty_picture.png";

const { container, topic, profileImege, nickName, like, tagBox } = styles;

const DetailPage = () => {
  return (
    <div className={container}>
      <span className={topic}>기술</span>
      <h2>redux와 recoil의 차이가 무엇인가요?</h2>
      <img src={emptyPicture} className={profileImege} alt="exampleImage1" />
      <span className={nickName}>닉네임</span>
      <p>
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
      <img src={emptyPicture} width="100" height="100" alt="exampleImage2" />
      <img src={emptyPicture} width="100" height="100" alt="exampleImage3" />
      <div className={tagBox}>
        <span>#React</span>
        <span>#React</span>
        <span>#React</span>
      </div>
      <LogOut_Like className={like} />
    </div>
  );
};

export default DetailPage;
