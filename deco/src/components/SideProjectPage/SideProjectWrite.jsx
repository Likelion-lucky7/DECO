import React from "react";
import styles from "./SideProjectWrite.module.css";
import { ReactComponent as ReactIcon } from "../../assets/sideproject/react.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/sideproject/js.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/sideproject/ts.svg";
import { ReactComponent as FigmaIcon } from "../../assets/sideproject/figma.svg";
const SideProjectWrite = () => {
  return (
    <form className={styles.container}>
      <input type="text" className={styles.titleInput} placeholder="제목을 입력해주세요."/>
      <div className={styles.descriptionBox}>
        <h2 className={styles.description}>프로젝트 소개</h2>
        <textarea
          // name="description"
          // defaultValue="This is a description."
          id=""
          cols="30"
          rows="10"
          className={styles.descriptionInput}
          placeholder="궁금한 내용을 적어주세요.&#13;&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어오"
        ></textarea>
      </div>
      <label htmlFor="input-file"  className={styles.inputButton} >업로드</label>
      <input type="file"  id="input-file" className={styles.uploadInput} />

      <div className={styles.dateBox}>
        <h2 className={styles.date}>모집 마감</h2>
        <input className={styles.dateInput} type="date" data-placeholder="날짜를 선택하세요" required />
      </div>

      <div className={styles.peopleBox}>
        <h2 className={styles.people}>모집 인원</h2>
        <div className={styles.dropdown}>
          <button className={styles.dropButton}>인원</button>
          <div className={styles.dropdownContent}>
            <a href="#">1명</a>
            <a href="#">2명</a>
            <a href="#">3명</a>
          </div>
        </div>
      </div>

      <div className={styles.satusBox}>
        <h2 className={styles.status}>진행현황</h2>
        <input type="radio" name="status" id="ing" />
        <label htmlFor="ing">진행중</label>
        <input type="radio" name="status" id="start" />
        <label htmlFor="start">초기모집</label>
      </div>

      <div className={styles.periodBox}>
        <h2 className={styles.period}>목표 기간</h2>
        <input type="radio" name="period" id="2week"></input>
        <label htmlFor="2week">1주 미만</label>
        <input type="radio" name="period" id="1month"></input>
        <label htmlFor="1month">2주 미만</label>
        <input type="radio" name="period" id="more_than_1month"></input>
        <label htmlFor="more_than_1month">한달 이상</label>
      </div>

      <div className={styles.roleBox}>
        <h2 className={styles.role}>모집 역할</h2>
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

      <div className={styles.skillBox}>
        <h2 className={styles.skill}>사용기술</h2>
        <input type="checkbox" id="javascript" />
        <label htmlFor="javascript" aria-label="자바스크립트">
          <JavascriptIcon className={styles.skillIcon} />
        </label>
        <input type="checkbox" id="typescript" />
        <label htmlFor="typescript" aria-label="타입스크립트">
          <TypescriptIcon className={styles.skillIcon} />
        </label>
        <input type="checkbox" id="react" />
        <label htmlFor="react" aria-label="리액트">
          <ReactIcon className={styles.skillIcon} />
        </label>
        <input type="checkbox" id="figma" />
        <label htmlFor="figma" aria-label="피그마">
          <FigmaIcon className={styles.skillIcon} />
        </label>
      </div>
      <div className={styles.emailBox}>
        <h2 className={styles.email}>이메일 공개여부</h2>
        <input type="radio" name="email" id="open" />
        <label htmlFor="open">공개</label>
        <input type="radio" name="email" id="private" />
        <label htmlFor="private">비공개</label>
      </div>
      <button className={styles.submitButton}>등록</button>
    </form>
  );
};

export default SideProjectWrite;
