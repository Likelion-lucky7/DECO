import React, { useState } from "react";
import emptyPicture from "@/assets/empty_Picture.png";
import threeDot from "@/assets/dots_three_icon.png";
import styles from "@/components/Common/AnswerEditor/AnswerEditor.module.css";

const AnswerEditor = ({ item }) => {
  let { user, comment, image } = item;

  return (
    <div>
      <div className={styles.editorBox}>
        <img
          src={emptyPicture}
          className={styles.profileImege}
          alt="exampleImage1"
        />
        <span className={styles.nickName}>{user.nickname}</span>
        <p className={styles.answer} type="text" value={"./"}>
          {comment}
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
    </div>
  );
};

export default AnswerEditor;
