import React from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.layout}>
      <WelcomeInfo />
      <FormInput />
      <FormInput />
    </div>
  );
};

export default Login;
