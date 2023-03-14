import styles from "./ShortcutList.module.css";
import ShortcutButton from "@/components/MainPage/ShortcutButton/ShortcutButton";
import { ReactComponent as QuestionIcon } from "@/assets/main/question_icon.svg";
import { ReactComponent as CommunityIcon } from "@/assets/main/community_icon.svg";
import { ReactComponent as SideProjectIcon } from "@/assets/main/sideproject_icon.svg";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listWrap}>
        <QuestionIcon className={styles.iconBox} />
        <h3 className={styles.title}>묻고 답하기</h3>
        <p className={styles.description}>
          더이상 영어를 번역할 일은 없습니다.
          <br />
          한국말로 질문을 주고 받으세요.
        </p>
        <ShortcutButton to="/question" />
      </div>

      <div className={styles.listWrap}>
        <CommunityIcon className={styles.iconBox} />
        <h3 className={styles.title}>커뮤니티</h3>
        <p className={styles.description}>
          다양한 사람들을 만나고
          <br />
          생각의 폭을 넓혀보세요.
        </p>
        <ShortcutButton to="/community" />
      </div>

      <div className={styles.listWrap}>
        <SideProjectIcon className={styles.iconBox} />
        <h3 className={styles.title}>사이드 프로젝트</h3>
        <p className={styles.description}>
          나에게 맞는 프로젝트나
          <br />
          스터디/모임을 찾아 참여해보세요.
        </p>
        <ShortcutButton to="sideproject" />
      </div>
    </div>
  );
};

export default MainPage;
