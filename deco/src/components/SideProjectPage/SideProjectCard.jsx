import React from "react";
import styles from "./SideProjectCard.module.css";
import { ReactComponent as ReactIcon } from "@/assets/sideproject/react.svg";
import { ReactComponent as JavascriptIcon } from "@/assets/sideproject/js.svg";
import { ReactComponent as TypescriptIcon } from "@/assets/sideproject/ts.svg";
import { ReactComponent as FigmaIcon } from "@/assets/sideproject/figma.svg";
import { ReactComponent as Like } from "@/assets/sideproject/like.svg";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { useNavigate } from "react-router-dom";

const SideProjectCard = ({ item }) => {
  let { title, description, date, role, skill, status, user, id } = item;

  let navigate = useNavigate();

  const navigation = () => {
    navigate(`/sideproject/${id}`);
  };

  const checkHandler = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      navigation();
    } else {
      return null;
    }
  };

  return (
    <div
      className={styles.container}
      onClick={navigation}
      onKeyPress={checkHandler}
      role="button"
      tabIndex={0}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skiltag}>
        {skill.indexOf("ts") == -1 || undefined ? null : (
          <li>
            <TypescriptIcon />
          </li>
        )}
        {skill.indexOf("js") == -1 || undefined ? null : (
          <li>
            <JavascriptIcon />
          </li>
        )}
        {skill.indexOf("react") == -1 || undefined ? null : (
          <li>
            <ReactIcon />
          </li>
        )}
        {skill.indexOf("figma") == -1 || undefined ? null : (
          <li>
            <FigmaIcon />
          </li>
        )}
      </ul>
      <div className={styles.user}>
        {user?.image == "" ? (
          <Profile className={styles.profile} />
        ) : (
          <img alt="" width={20} src={user?.image} />
        )}
        <p>{user?.nickname}</p>
      </div>
      <div className={styles.like}>
        <Like className={styles.likeIcon} /> <span>2</span>
      </div>
      <div className={styles.date}>
        <p>마감일</p>
        <p>{date}</p>
      </div>
      <ul className={styles.field}>
        <li>{status}</li>
        {role.indexOf("프론트엔드") == -1 ||
        role.indexOf("프론트엔드") == undefined ? (
          <li style={{ display: "none" }}></li>
        ) : (
          <li>프론트엔드</li>
        )}
        {role.indexOf("백엔드") == -1 || role.indexOf("백엔드") == undefined ? (
          <li style={{ display: "none" }}></li>
        ) : (
          <li>백엔드</li>
        )}
        {role.indexOf("디자이너") == -1 ||
        role.indexOf("디자이너") == undefined ? (
          <li style={{ display: "none" }}></li>
        ) : (
          <li>디자이너</li>
        )}
        {role.indexOf("기획") == -1 || role.indexOf("기획") == undefined ? (
          <li style={{ display: "none" }}></li>
        ) : (
          <li>기획</li>
        )}
        {role.indexOf("기타") == -1 || role.indexOf("기타") == undefined ? (
          <li style={{ display: "none" }}></li>
        ) : (
          <li>기타</li>
        )}
      </ul>
    </div>
  );
};

export default SideProjectCard;
