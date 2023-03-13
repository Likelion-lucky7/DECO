import React from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo";
import FormInput from "@/components/Common/FormInput";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.layout}>
      <WelcomeInfo />
      <FormInput />
      <FormInput />
    </div>
  );
};

export default Login;
