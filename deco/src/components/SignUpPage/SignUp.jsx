import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useCallback, useRef, useState } from "react";
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

  // 이메일, 비밀번호, 비밀번호 확인, 닉네임
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");

  // 오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const onChangeName = useCallback((e) => {
    const nickNameCurrent = e.target.value;
    setNickName(e.target.value);

    if (nickNameCurrent.length < 3 || nickNameCurrent.length > 11) {
      setNickNameMessage("❌2글자 이상 10글자 미만으로 입력해주세요.");
      setIsNickName(false);
    } else {
      setNickNameMessage("");
      setIsNickName(true);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("❌이메일 형식을 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "❌숫자+영문자+특수문자 조합 8자리 이상 입력해주세요.",
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("⭕비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("❌비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password],
  );

  const isCheckError = () => {
    if (
      setIsNickName &&
      setIsEmail &&
      setIsPassword &&
      setIsPasswordConfirm === true
    ) {
      setIsActive(true);
    }
  };

  // 모든 조건을 충족하면 작동 (버튼 활성화)
  // const getIsActive = isValidEmail && isValidPassword && isValidInput === true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* const { email, password, passwordConfirm, nickName } =
      formSatateRef.current;
    console.log(formSatateRef); */

    const user = await signUp(email, password, nickName);
    await createAuthUser(user, { photoURL: "../../assets/empty_picture.png" });

    console.log("회원가입 및 users 콜렉션에 user 데이터 생성");
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

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={isCheckError}
      >
        <FileUpload isSignUp={true} />

        <div className={styles.formbox}>
          <FormInput
            name="email"
            type="email"
            label="이메일"
            placeholder="이메일 입력"
            onChange={onChangeEmail}
          />
          {email.length > 0 && (
            <span className={styles.message}>{emailMessage}</span>
          )}
        </div>

        <div className="">
          <FormInput
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호 입력"
            onChange={onChangePassword}
          />
          {password.length > 0 && (
            <span className={styles.message}>{passwordMessage}</span>
          )}
        </div>

        <div className="">
          <FormInput
            name="passwordConfirm"
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호 확인 입력"
            onChange={onChangePasswordConfirm}
          />
          {passwordConfirm.length > 0 && (
            <span className={styles.message}>{passwordConfirmMessage}</span>
          )}
        </div>

        <div className="">
          <FormInput
            name="nickname"
            label="닉네임"
            placeholder="닉네임 입력"
            onChange={onChangeName}
          />
          {nickName.length > 0 && (
            <span className={styles.message}>{nickNameMessage}</span>
          )}
        </div>

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
