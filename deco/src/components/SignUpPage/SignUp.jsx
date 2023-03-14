import React from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      <form className={classes.form}>
        <FormInput name="id" label="아이디" placeholder="아이디 입력" />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
        />
        <FormInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일 입력"
        />
        <FormInput name="nickname" label="닉네임" placeholder="닉네임 입력" />
        <SubmitButton />
      </form>
    </div>
  );
};

export default SignUp;
