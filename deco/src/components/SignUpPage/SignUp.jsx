import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useRef, useState } from "react";
import { useSignUp } from "@/firebase/auth/useSignUp";
import { useCreateAuthUser } from "@/firebase/firestore";
import { useAuthState } from "@/firebase/auth/useAuthState";

const initialFormState = {
  email: "",
  password: "",
  passwordConfirm: "",
  nickname: "",
};

const SignUp = () => {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  const [isActive, setIsActive] = useState(false);

  const formSatateRef = useRef(initialFormState);

  const { email, password, passwordConfirm, nickname } = formSatateRef.current;

  // 이메일 검사 @, .이 포함되게
  const isValidEmail = email.includes("@") && email.includes(".");

  // 비밀번호 특수문자 검사 (특수문자 1자 이상, 전체 6자 이상)
  const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const isValidPassword = password.length >= 6 && specialLetter >= 1;

  // 모든 input의 value가 1자 이상
  const isValidInput =
    nickname.length >= 1 &&
    email.length >= 1 &&
    password.length >= 1 &&
    passwordConfirm.length >= 1;

  // 모든 조건을 충족하면 작동 (버튼 활성화)
  const getIsActive = isValidEmail && isValidPassword && isValidInput === true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, passwordConfirm, nickname } =
      formSatateRef.current;
    console.log(formSatateRef);

    const user = await signUp(email, password, nickname);
    await createAuthUser(user, { photoURL: "../../assets/empty_picture.png" });

    console.log("회원가입 및 users 콜렉션에 user 데이터 생성");
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formSatateRef.current[name] = value;

    if (isValidEmail) {
      console.error("이메일 형식으로 적어주세요.");
    }

    if (isValidPassword) {
      console.error("특수문자 1자 이상, 전체 6자 이상 적어주세요.");
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error("비밀번호가 일치하지 않습니다.");
    }

    if (!nickname || nickname.trim().length < 2) {
      console.error("닉네임은 2글자 이상 입력해야 해요");
    }

    if (!isValidEmail || !isValidPassword || !isValidInput) {
      alert("모든 칸에 입력을 해주세요.");
    }

    if (getIsActive) {
      setIsActive((isActive) => !isActive);
    }
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      <Profile className={styles.profile} alt="프로필 이미지" />
      <p className={styles.profile_info}>이미지를 설정해주세요 !</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <FileUpload isSignUp={true} />

        <FormInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일 입력"
          onChange={handleChangeInput}
        />

        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={handleChangeInput}
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호 확인 입력"
          onChange={handleChangeInput}
        />

        <FormInput
          name="nickname"
          label="닉네임"
          placeholder="닉네임 입력"
          onChange={handleChangeInput}
        />

        <div>로그인한 유저: {user?.email}</div>

        {isActive ? (
          <SubmitButton type="submit" title="회원가입" writeButton={false} />
        ) : (
          <SubmitButton
            type="submit"
            title="회원가입"
            writeButton={false}
            disabled
          />
        )}
      </form>
    </div>
  );
};

export default SignUp;
