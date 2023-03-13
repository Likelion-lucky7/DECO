import React from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.layout}>
      <WelcomeInfo />
    </div>
  );
};

export default Login;
