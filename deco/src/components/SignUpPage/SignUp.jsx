import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "@/firebase/auth";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword,
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
  };
  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      <Profile className={styles.profile} alt="프로필 이미지" />
      <p className={styles.profile_info}>이미지를 설정해주세요 !</p>

      <form className={styles.form}>
        <FileUpload isSignUp={true} />

        <FormInput
          name="id"
          label="아이디"
          placeholder="아이디 입력"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
            console.log(registerPassword);
          }}
        />
        <FormInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일 입력"
        />
        <FormInput name="nickname" label="닉네임" placeholder="닉네임 입력" />
        <button onClick={logout}>로그아웃</button>
        <div>로그인한 유저: {user?.email}</div>
        <SubmitButton title="회원가입" writeButton={false} onClick={register} />
      </form>
    </div>
  );
};

export default SignUp;
