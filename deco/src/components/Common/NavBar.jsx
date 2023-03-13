import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "@/assets/main/logo.svg";

const NavBar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1>
            <Link to="/">
              <Logo className={styles.logo} />
            </Link>
          </h1>

          <div className={styles.container}>
            <ul className={styles.navigation}>
              <li className={styles.question}>
                <Link to="/about">묻고 답하기</Link>
              </li>
              <li className={styles.community}>
                <Link to="/">커뮤니티</Link>
              </li>
              <li className={styles.sideProject}>
                <Link to="/">사이드 프로젝트</Link>
              </li>
            </ul>

            <ul className={styles.account}>
              <li className={styles.login}>
                <a href="#">로그인</a>
              </li>
              <li className={styles.join}>
                <a href="#">회원가입</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
