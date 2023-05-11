import styles from "./ShortcutList.module.css";
import ShortcutButton from "@/components/MainPage/ShortcutButton/ShortcutButton";
import { ReactComponent as QuestionIcon } from "@/assets/main/question_icon.svg";
import { ReactComponent as CommunityIcon } from "@/assets/main/community_icon.svg";
import { ReactComponent as SideProjectIcon } from "@/assets/main/sideproject_icon.svg";

const MainPage = ({ list, ...restProps }) => {
  function renderIcon(props) {
    if (props.id === "question") {
      return <QuestionIcon className={styles.iconBox} />;
    } else if (props.id === "community") {
      return <CommunityIcon className={styles.iconBox} />;
    } else {
      return <SideProjectIcon className={styles.iconBox} />;
    }
  }

  return (
    <div>
      <ul className={styles.container}>
        {list.map((item) => (
          <li key={item.id} className={styles.listWrap}>
            {renderIcon(item)}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ShortcutButton to={item.to} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
