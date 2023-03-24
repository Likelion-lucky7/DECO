import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useId, useRef } from "react";
import { useSignUp } from "@/firebase/auth/useSignUp";
import { useCreateAuthUser } from "@/firebase/firestore";
import { useAuthState } from "@/firebase/auth/useAuthState";
import { useDownloadURL, useUploadFiles } from "@/firebase/storage";

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

  const formSatateRef = useRef(initialFormState);

  // 프로필 사진 업로드
  const id = useId();

  const { fileInputRef, uploadFiles } = useUploadFiles();

  const { imageIsLoading, imageError, downloadURL } = useDownloadURL();
  console.log({ imageIsLoading, imageError, downloadURL });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, passwordConfirm, nickname } =
      formSatateRef.current;
    console.log(formSatateRef);
    if (!nickname || nickname.trim().length < 2) {
      console.error("닉네임은 2글자 이상 입력해야 해요");
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error("비밀번호를 다시 확인하세요");
      return;
    }
    uploadFiles();
    console.log("파일 업로드 요청");
    const user = await signUp(email, password, nickname);
    await createAuthUser(user, { photoURL: "assets/" });

    console.log("회원가입 및 users 콜렉션에 user 데이터 생성");
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formSatateRef.current[name] = value;
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    return (
      <div>
        {/* <MainPage />; */}
        <ul>
          {downloadURL &&
            downloadURL.map((url) => (
              <li key={url}>
                <img height={30} src={url} alt="" />
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      <Profile className={styles.profile} alt="프로필 이미지" />
      <p className={styles.profile_info}>이미지를 설정해주세요 !</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <FileUpload id={id} isSignUp={true} ref={fileInputRef} />

        <FormInput
          name="email"
          type="email"
          label="e-mail 아이디"
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
        <FormInput
          name="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호 입력"
          onChange={handleChangeInput}
        />
        <FormInput
          name="nickname"
          label="닉네임"
          placeholder="닉네임 입력"
          onChange={handleChangeInput}
        />
        <div>로그인한 유저: {user?.email}</div>
        <SubmitButton type="submit" title="회원가입" writeButton={false} />
      </form>
    </div>
  );
};

export default SignUp;
