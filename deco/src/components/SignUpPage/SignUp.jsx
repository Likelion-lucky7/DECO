import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useId, useRef, useState } from "react";
import { useSignUp } from "@/firebase/auth/useSignUp";
import { useCreateAuthUser } from "@/firebase/firestore";
import { useAuthState } from "@/firebase/auth/useAuthState";
import { useDownloadURL, useUploadFiles } from "@/firebase/storage";
import { useSignOut } from "@/firebase/auth";

const initialFormState = {
  email: "",
  password: "",
  passwordConfirm: "",
  nickname: "",
};

const SignUp = () => {
  const { signUp } = useSignUp();
  const { signOut } = useSignOut();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  const formSatateRef = useRef(initialFormState);

  // 프로필 사진 업로드
  const id = useId();

  const [profileImage, setProfileImage] = useState(null);
  const { fileInputRef, uploadFiles } = useUploadFiles();

  const { imageIsLoading, imageError, downloadURL } = useDownloadURL();
  console.log({ imageIsLoading, imageError, downloadURL });

  const handleChangeUploadInput = (e) => {
    const { files } = e.target;
    const willUploadFile = files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setProfileImage(reader.result);
    });

    if (willUploadFile) {
      reader.readAsDataURL(willUploadFile);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formSatateRef.current[name] = value;
  };

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

    const uploadedImagesUrls = await uploadFiles();

    // 업로드 된 이미지 URL
    const uploadedImageUrl = uploadedImagesUrls[0];

    console.log("파일 업로드 요청");
    const user = await signUp(email, password, nickname, uploadedImageUrl);
    await createAuthUser(user, { photoURL: uploadedImageUrl });

    console.log("회원가입 및 users 콜렉션에 user 데이터 생성");
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    return (
      <div className={styles.profileImage}>
        <img height={200} src={user.photoURL} alt="프로필 이미지" />
        <p>{user.displayName}</p>
        <button onClick={signOut}>로그아웃</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      {profileImage ? (
        <img
          src={profileImage}
          alt="프로필 이미지"
          className={styles.profile}
          width={137}
        />
      ) : (
        <>
          <Profile className={styles.profile} alt="프로필 이미지" />
          <p className={styles.profile_info}>이미지를 설정해주세요 !</p>
        </>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <FileUpload
          id={id}
          isSignUp={true}
          ref={fileInputRef}
          onChange={handleChangeUploadInput}
        />

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
