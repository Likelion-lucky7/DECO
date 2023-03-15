import { ReactComponent as MainImage } from "@/assets/main/main_img.svg";
import ShortcutList from "@/components/MainPage/ShortcutList/ShortcutList.jsx";
import styles from "./MainPage.module.css";
import { useState } from "react";

const MainPage = () => {
  const [shortcutList] = useState([
    {
      id: "question",
      title: "묻고 답하기",
      description: `더이상 영어를 번역할 일은 없습니다.\n한국말로 질문을 주고 받으세요.`,
      to: "/question",
    },
    {
      id: "community",
      title: "커뮤니티",
      description: `다양한 사람들을 만나고\n생각의 폭을 넓혀보세요.`,
      to: "/community",
    },
    {
      id: "sideproject",
      title: "사이드 프로젝트",
      description: `나에게 맞는 프로젝트나\n스터디/모임을 찾아 참여해보세요.`,
      to: "/sideproject",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <MainImage className={styles.mainBanner} />
        <ShortcutList list={shortcutList} />
      </div>
    </div>
  );
};

export default MainPage;
