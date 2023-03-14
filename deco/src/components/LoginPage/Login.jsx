import React from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.container}>
      <WelcomeInfo subtitle="많은 정보를 얻어가세요 !" />

      <form className={classes.form}>
        <FormInput name="id" label="아이디" placeholder="아이디 입력" />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
        />
        <SubmitButton />
      </form>

      <p className={classes.info}>
        아직 회원이 아니시라면 {""}
        <Link to="./" className={classes.toSignUp}>
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
