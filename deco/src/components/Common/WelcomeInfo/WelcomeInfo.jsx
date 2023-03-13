import React from "react";
import classes from "./WelcomeInfo.module.css";
import { ReactComponent as Logo } from "../../../assets/DECO_Logo.svg";

const WelcomeLogo = () => {
  return (
    <div className={classes.layout}>
      <Logo className={classes.logo} />
      <p className={classes.title}>
        <span className={classes.accent_primary}>DE</span>
        <span className={classes.accent_third}>CO</span>에 오신 것을 환영합니다.
      </p>
      <p className={classes.subtitle}>많은 정보를 얻어가세요 !</p>
    </div>
  );
};

export default WelcomeLogo;
