import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "@/assets/DECO_Logo.svg";
import A11yHidden from "./A11yHidden/A11yHidden";

const NavBar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <A11yHidden as="h1">로고</A11yHidden>
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>

          <div className={styles.container}>
            <ul className={styles.navigation}>
              <li className={styles.question}>
                <Link to="/question">묻고 답하기</Link>
              </li>
              <li className={styles.community}>
                <Link to="/community">커뮤니티</Link>
              </li>
              <li className={styles.sideProject}>
                <Link to="/sideproject">사이드 프로젝트</Link>
              </li>
            </ul>

            <ul className={styles.account}>
              <li className={styles.login}>
                <Link to="/login">로그인</Link>
              </li>
              <li className={styles.join}>
                <Link to="/signup">회원가입</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
