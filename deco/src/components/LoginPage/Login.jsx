import React, { useRef, useState } from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useAuthState, useSignIn } from "@/firebase/auth";
import MainPage from "@/pages/MainPage";

const initialFormState = {
  email: "",
  password: "",
};
const Login = () => {
  const formStateRef = useRef(initialFormState);
  const { isLoading: isLoadingSignIn, signIn } = useSignIn();

  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;

    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    /* return (
      <MainPage />
      // <button onClick={handleSignOut}>로그아웃</button>
    ); */
  }

  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="많은 정보를 얻어가세요 !" />
      <form className={styles.form} onSubmit={handleSignIn}>
        <FormInput
          name="email"
          type="email"
          label="email 아이디"
          placeholder="아이디 입력"
          onChange={handleChangeInput}
        />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={handleChangeInput}
        />
        <SubmitButton title="로그인" writeButton={false} type="submit" />
      </form>

      <p className={styles.info}>
        아직 회원이 아니시라면 {""}
        <Link to="../signup" className={styles.toSignUp}>
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
