import React from "react";
import styles from "./WelcomeInfo.module.css";
import { ReactComponent as Logo } from "../../assets/DECO_Logo.svg";

const WelcomeLogo = () => {
  return (
    <div className={styles.layout}>
      <Logo className={styles.logo} />
      <p className={styles.title}>
        <span className={styles.accent_primary}>DE</span>
        <span className={styles.accent_third}>CO</span>에 오신 것을 환영합니다.
      </p>
      <p className={styles.subtitle}>많은 정보를 얻어가세요 !</p>
    </div>
  );
};

export default WelcomeLogo;
