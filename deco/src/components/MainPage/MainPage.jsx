import { ReactComponent as MainImage } from "@/assets/main/main_img.svg";
import ShortcutList from "@/components/MainPage/ShortcutList/ShortcutList.jsx";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainImage className={styles.mainBanner} />
      <ShortcutList />
    </div>
  );
};

export default MainPage;
