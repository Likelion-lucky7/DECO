import classes from "./WelcomeInfo.module.css";
import { ReactComponent as Logo } from "../../../assets/logo_big.svg";

const WelcomeLogo = ({ subtitle }) => {
  return (
    <div className={classes.layout}>
      <Logo className={classes.logo} />
      <p className={classes.title}>
        <span className={classes.accent_primary}>DE</span>
        <span className={classes.accent_third}>CO</span>에 오신 것을 환영합니다.
      </p>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
};

export default WelcomeLogo;
