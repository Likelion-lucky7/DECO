import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useCallback, useRef, useState, useId } from "react";
import { useSignUp } from "@/firebase/auth/useSignUp";
import { useCreateAuthUser } from "@/firebase/firestore";
import { useAuthState } from "@/firebase/auth/useAuthState";
import { useNavigate } from "react-router-dom";
import { useDownloadURL, useUploadFiles } from "@/firebase/storage";
import { useSignOut } from "@/firebase/auth";
import { useRecoilState } from "recoil";
import { tokenState } from "@/@store/authUserState";

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
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);

  // 이메일, 비밀번호, 비밀번호 확인, 닉네임
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  // 오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  // 유효성 검사가 전부 true(통과)이면 버튼 동작하게
  const [isActive, setIsActive] = useState(false);

  const onChangeName = useCallback((e) => {
    const nicknameCurrent = e.target.value;
    setNickname(e.target.value);

    if (nicknameCurrent.length < 2 || nicknameCurrent.length > 11) {
      setNicknameMessage("❌2글자 이상 10글자 미만으로 입력해주세요.");
      setIsNickname(false);
    } else {
      setNicknameMessage("⭕올바른 닉네임 형식입니다.");
      setIsNickname(true);
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
      setEmailMessage("⭕올바른 이메일 형식입니다.");
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
      setPasswordMessage("⭕안전한 비밀번호입니다.");
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
    if (isEmail && isPassword && isNickname && isPasswordConfirm === true) {
      setIsActive(true);
    }
  };

  // 프로필 사진 업로드
  const id = useId();

  // 파일 업로드 이미지 URL 상태
  const [profileImage, setProfileImage] = useState(null);
  const { fileInputRef, uploadFiles } = useUploadFiles();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImagesUrls = await uploadFiles();

    // 업로드 된 이미지 URL
    const uploadedImageUrl = uploadedImagesUrls[0];

    console.log("파일 업로드 요청");
    const user = await signUp(email, password, nickname, uploadedImageUrl);
    await createAuthUser(user, { photoURL: uploadedImageUrl });

    console.log("회원가입 및 users 콜렉션에 user 데이터 생성");

    setToken("access_token");

    alert("데코에 오신 걸 환영합니다 !");

    navigate("/");
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

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={isCheckError}
      >
        <FileUpload
          id={id}
          isSignUp={true}
          ref={fileInputRef}
          onChange={handleChangeUploadInput}
          aria-label="프로필 이미지 업로드"
        />

        <div className={styles.formbox}>
          <FormInput
            name="email"
            type="email"
            autoComplete="email"
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
            autoComplete="new-password"
            label="비밀번호"
            aria-label="비밀번호. 숫자 영문자 특수문자 조합 총 8자 이상"
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
            autoComplete="new-password"
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
            aria-label="닉네임. 2글자 이상 10글자 미만"
            placeholder="닉네임 입력"
            onChange={onChangeName}
          />
          {nickname.length > 0 && (
            <span className={styles.message}>{nicknameMessage}</span>
          )}
        </div>

        {/* <div>로그인한 유저: {user?.email}</div> */}

        {isActive ? (
          <SubmitButton
            type="submit"
            title="회원가입"
            writeButton={false}
            className={styles.submitButton}
          />
        ) : (
          <SubmitButton
            type="submit"
            title="회원가입"
            writeButton={false}
            className={styles.disabledButton}
            disabled
          />
        )}
      </form>
    </div>
  );
};

export default SignUp;
