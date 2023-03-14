import React from "react";
import styles from "./SideProjectWrite.module.css";

const SideProjectWrite = () => {
  return (
    <div className={styles.container}>
      <input type="text"className={styles.titleInput} />
      <h2>프로젝트 소개</h2>
      <textarea name="" id="" cols="30" rows="10" style={styles.descriptionInput}/>
      <input type="file" />
      <h2 className={styles.date}>모집 마감</h2>
      <input type="date" />
      <h2 className={styles.people}>모집 인원</h2>
      <div className={styles.dropdown}>
        <button className={styles.dropButton}>Dropdown</button>
        <div className={styles.dropdownContent}>
          <a href="#">1명</a>
          <a href="#">2명</a>
          <a href="#">3명</a>
        </div>
      </div>
      <div className={styles.satus}>
      <h2 >진행현황</h2>
      <input type="radio" name="status" id="ing" />
      <label htmlFor="ing">진행중</label>
      <input type="radio" name="status" id="start" />
      <label htmlFor="start">초기모집</label>
      </div>
      <div className={styles.period}>
        <h2>목표 기간</h2>
        <input type="radio" name="period" id="2week"></input>
        <label htmlFor="2week">1주 미만</label>
        <input type="radio" name="period" id="1month"></input>
        <label htmlFor="1month">2주 미만</label>
        <input type="radio" name="period" id="more_than_1month"></input>
        <label htmlFor="more_than_1month">한달 이상</label>
      </div>
      <div className={styles.role}>
        <h2>모집 역할</h2>
        <input type="checkbox" id="frontend" />
        <label htmlFor="frontend">프론트엔드</label>
        <input type="checkbox" id="backend" />
        <label htmlFor="backend">백엔드</label>
        <input type="checkbox" id="design" />
        <label htmlFor="design">디자이너</label>
        <input type="checkbox" id="plan" />
        <label htmlFor="plan">기획</label>
        <input type="checkbox" id="etc" />
        <label htmlFor="etc">기타</label>
      </div>

      <div className={styles.skill}>
        <h2>사용기술</h2>
        <input type="checkbox" id="javascript" />
        <label htmlFor="javascript">자바스크립트</label>
        <input type="checkbox" id="typescript" />
        <label htmlFor="typescript">타입스크립트</label>
        <input type="checkbox" id="react" />
        <label htmlFor="react">리액트</label>
        <input type="checkbox" id="figma" />
        <label htmlFor="figma">피그마</label>
      </div>

      <h2>이메일 공개여부</h2>
      <input type="radio" name="email" id="open" />
      <label htmlFor="open">공개</label>
      <input type="radio" name="email" id="private" />
      <label htmlFor="private">비공개</label>
    </div>
  );
};

export default SideProjectWrite;
