import React, { useEffect, useState } from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { firebaseAuth } from "@/firebase/auth";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword,
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="많은 정보를 얻어가세요 !" />
      <form className={styles.form}>
        <div>로그인한 유저: {user?.email}</div>
        <FormInput
          name="id"
          label="아이디"
          placeholder="아이디 입력"
          onChange={(event) => {
            setloginEmail(event.target.value);
          }}
        />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={(event) => {
            setloginPassword(event.target.value);
          }}
        />
        <SubmitButton title="로그인" writeButton={false} onClick={login} />
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
