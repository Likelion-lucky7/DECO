import React, { useState } from "react";
import styles from "./SideProjectWrite.module.css";
import { ReactComponent as ReactIcon } from "../../assets/sideproject/react.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/sideproject/js.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/sideproject/ts.svg";
import { ReactComponent as FigmaIcon } from "../../assets/sideproject/figma.svg";
const SideProjectWrite = () => {
  let [titleLength, setTitleLength] = useState(0);
  const titleCount = (e) => {
    setTitleLength(e.target.value.length);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("작성완료");
      }}
      className={styles.container}
    >
      <fieldset>
        <legend className={styles.a11yhidden}>
          <h1>게시글 작성 폼</h1>
        </legend>
        <ul>
          <li>
            <div className={styles.titleBox}>
              <h2 className={styles.a11yhidden}>프로젝트명</h2>
              <input
                type="text"
                className={styles.titleInput}
                placeholder="제목을 입력해주세요."
                maxLength="100"
                required
                tabIndex="0"
                onChange={(e) => {
                  titleCount(e);
                }}
              />
              <div className={styles.titleCount}>{titleLength}/100</div>
            </div>
          </li>
          <li>
            <div className={styles.descriptionBox}>
              <h2 className={styles.description}>프로젝트 소개</h2>
              <textarea
                id=""
                cols="30"
                rows="10"
                className={styles.descriptionInput}
                placeholder="궁금한 내용을 적어주세요.&#13;&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어요."
                required
              ></textarea>
            </div>
          </li>
          <li>
            <label htmlFor="input-file" className={styles.inputButton}>
              <h2 className={styles.a11yhidden}>업로드</h2>
            </label>
            <input type="file" id="input-file" className={styles.uploadInput} />
          </li>
          <li>
            <div className={styles.dateBox}>
              <h2 className={styles.date}>모집 마감</h2>
              <input
                className={styles.dateInput}
                type="date"
                data-placeholder="날짜를 선택하세요"
                required
              />
            </div>
          </li>
          <li className={styles.peopleBox}>
            <h2 className={styles.people}>모집 인원</h2>
            <select
              name="memberCount"
              className={styles.member}
              defaultValue="인원"
              required
            >
              <option value="1">1명</option>
              <option value="2">2명</option>
              <option value="3">3명</option>
            </select>
          </li>
          <li>
            <div className={styles.satusBox}>
              <h2 className={styles.status}>진행현황</h2>
              <input type="radio" name="status" id="ing" />
              <label htmlFor="ing">진행중</label>
              <input type="radio" name="status" id="start" />
              <label htmlFor="start">초기모집</label>
            </div>
          </li>
          <li>
            <div className={styles.periodBox}>
              <h2 className={styles.period}>목표 기간</h2>
              <input type="radio" name="period" id="2week"></input>
              <label htmlFor="2week">1주 미만</label>
              <input type="radio" name="period" id="1month"></input>
              <label htmlFor="1month">2주 미만</label>
              <input type="radio" name="period" id="more_than_1month"></input>
              <label htmlFor="more_than_1month">한달 이상</label>
            </div>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <div className={styles.emailBox}>
              <h2 className={styles.email}>이메일 공개여부</h2>
              <input type="radio" name="email" id="open" />
              <label htmlFor="open">공개</label>
              <input type="radio" name="email" id="private" />
              <label htmlFor="private">비공개</label>
            </div>
          </li>
        </ul>

        <button type="submit" className={styles.submitButton}>
          등록
        </button>
      </fieldset>
    </form>
  );
};

export default SideProjectWrite;
