import React, { useState } from "react";
import emptyPicture from "@/assets/empty_Picture.png";
import threeDot from "@/assets/dots_three_icon.png";
import styles from "@/components/QuestionPage/AnswerEditor/AnswerEditor.module.css";

const AnswerEditor = () => {
  return (
    <div>
      <h2 className={styles.answer}>답변</h2>
      <div className={styles.editorBox}>
        <img
          src={emptyPicture}
          className={styles.profileImege}
          alt="exampleImage1"
        />
        <span className={styles.nickName}>닉네임</span>
        <p className={styles.answer} type="text" value={"./"}>
          redux와 recoil이 상태를 관리하기 위한 라이브러리로 알고 있는데 둘의
          차이점 장단점이 궁금합니다.redux와 recoil이 상태를 관리하기 위한
          라이브러리로 알고 있는데 둘의 차이점 장단점이 궁금합니다.redux와
          recoil이 상태를 관리하기 위한 라이브러리로 알고 있는데 둘의 차이점
          장단점이 궁금합니다.redux와 recoil이 상태를 관리하기 위한 라이브러리로
          알고 있는데 둘의 차이점 장단점이 궁금합니다.redux와 recoil이 상태를
          관리하기 위한 라이브러리로 알고 있는데 둘의 차이점 장단점이
          궁금합니다.redux와 recoil이 상태를 관리하기 위한 라이브러리로 알고
          있는데 둘의 차이점 장단점이 궁금합니다.redux와 recoil이 상태를
          관리하기 위한 라이브러리로 알고 있는데 둘의 차이점 장단점이
          궁금합니다.
        </p>
        <img
          src={threeDot}
          type="button"
          className={styles.dotThree}
          alt="점 세개 선택버튼"
        />
        <div className={styles.buttonWrapper}>
          <button name="editButton" type="submit" className="">
            수정하기
          </button>
          <button name="deleteButton" type="submit">
            삭제하기
          </button>
        </div>
      </div>
      <div className={styles.editorBox}>
        <img
          src={emptyPicture}
          className={styles.profileImege}
          alt="exampleImage1"
        />
        <span className={styles.nickName}>닉네임</span>
        <p className={styles.answer} type="text" value={"./"}>
          redux와 recoil이 상태를 관리하기 위한 라이브러리로 알고 있지
        </p>
        <img
          src={threeDot}
          type="button"
          className={styles.dotThree}
          alt="점 세개 선택버튼"
        />
        <button
          name="reportButton"
          type="submit"
          className={styles.buttonWrapper}
        >
          신고하기
        </button>
      </div>
    </div>
  );
};

export default AnswerEditor;
