import React, { useEffect, useState } from "react";
import styles from "./SideProjectDetail.module.css";
import Tag from "@/components/SideProjectPage/Tag";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as ReactIcon } from "@/assets/sideproject/react.svg";
import { ReactComponent as TypeScriptIcon } from "@/assets/sideproject/ts.svg";
import { ReactComponent as JavaScriptIcon } from "@/assets/sideproject/js.svg";
import { ReactComponent as FigmaIcon } from "@/assets/sideproject/figma.svg";

const SideProjectDetail = () => {
  let id = useParams();
  let [props, setProps] = useState("");
  const getData = async () => {
    let response = await axios.get(`http://localhost:3001/contents/${id.id}`);
    let data = await response.data;
    setProps(data);
  };
  let {
    title,
    description,
    user,
    date,
    period,
    status,
    skill,
    member,
    role,
    uploadImage,
  } = props;
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        {/* < A11yHidden as="h1" value="게시글 상세페이지" /> */}
        <h1 className={styles.a11yhidden}>게시글 상세페이지</h1>
        <ul>
          <li>
            <h2 className={styles.title}>{title}</h2>
          </li>
          <li className={styles.userBox}>
            <img src={user?.image} alt="" />
            <h2>{user?.nickname}</h2>
            <p>{user?.email}</p>
          </li>
          <li className={styles.descriptionBox}>
            <h2>프로젝트 소개</h2>
            <p className={styles.description}>{description}</p>
          </li>
          <li className={styles.imageBox}>
            <h2 className={styles.a11yhidden}>이미지</h2>
            {uploadImage?.map((item, index) => {
              return <img key={index} src={item} alt="하하" />;
            })}
          </li>
          <li className={styles.dateBox}>
            <h2>모집 마감</h2>
            <Tag item={date} />
          </li>
          <li className={styles.memberBox}>
            <h2>모집 인원</h2>
            <Tag item={member} />
          </li>
          <li className={styles.roleBox}>
            <h2>모집역할</h2>
            {role?.map((item, index) => {
              return <Tag key={index} item={item} />;
            })}
          </li>
          <li className={styles.periodBox}>
            <h2>목표기간</h2>
            <Tag item={period} />
          </li>
          <li className={styles.statusBox}>
            <h2>진행현황</h2>
            <Tag item={status} />
          </li>
          <li className={styles.skillBox}>
            <h2>사용기술</h2>
            {skill?.indexOf("js") === -1 ||skill?.indexOf("js")===undefined  ? null : (
              <JavaScriptIcon className={styles.skillIcon} />
            )}
            {skill?.indexOf("ts") === -1 ||skill?.indexOf("ts")===undefined ? null : (
              <TypeScriptIcon className={styles.skillIcon} />
            )}
            {skill?.indexOf("react") === -1||skill?.indexOf("react")===undefined ? null : (
              <ReactIcon className={styles.skillIcon} />
            )}
            {skill?.indexOf("figma") === -1 ||skill?.indexOf("figma")===undefined ? null : (
              <FigmaIcon className={styles.skillIcon} />
            )}
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

export default SideProjectDetail