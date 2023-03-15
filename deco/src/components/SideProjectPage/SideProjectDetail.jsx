import React, { useEffect, useState } from "react";
import styles from "./SideProjectDetail.module.css";

const SideProjectDetail = () => {


  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h1 className={styles.a11yhidden}>게시글 상세페이지</h1>
        <ul>
          <li>
            <h2 className={styles.title}>타이틀</h2>
          </li>
          <li className={styles.userBox}>
            <img src="" alt="" />
            <h2>닉네임</h2>
            <p>이메일</p>
          </li>
          <li className={styles.descriptionBox}>
            <h2>프로젝트 소개</h2>
            <p className={styles.description}>글내용입니다. 글내용입니다</p>
          </li>
          <li className={styles.imageBox}>
            <h2 className={styles.a11yhidden}>이미지</h2>
            <img src="" alt="" />
          </li>
          <li className={styles.dateBox}>
            <h2>모집 마감</h2>
          </li>
          <li className={styles.memberBox}>
            <h2>모집 인원</h2>
          </li>
          <li className={styles.roleBox}>
            <h2>모집역할</h2>
          </li>
          <li className={styles.periodBox}>
            <h2>목표기간</h2>
          </li>
          <li className={styles.statusBox}>
            <h2>진행현황</h2>
          </li>
          <li className={styles.skillBox}>
            <h2>사용기술</h2>
          </li>
        </ul>
        <div className={styles.like}>
          <p className={styles.a11yhidden}>좋아요</p>
        </div>
      </div>

      {/* 답변하기 리스트 렌더링 */}
    </div>
  );
};

export default SideProjectDetail;
