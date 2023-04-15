import { useRef } from "react";
import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useSignIn, useSignOut } from "@/firebase/auth";
import { useRecoilState } from "recoil";
import { tokenState } from "@/@store/authUserState";

const initialFormState = {
  email: "",
  password: "",
};
const Login = () => {
  const formStateRef = useRef(initialFormState);
  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();
  const navigate = useNavigate();

  // 로그인 상태를 알려주는 RecoilState
  const [token, setToken] = useRecoilState(tokenState);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;

    await signIn(email, password);

    if (user) {
      setToken("access_token");
      alert("로그인 되었습니다 !");
      navigate(-1, { replace: true });
    }
  };

  const handleSignOut = async () => {
    alert("로그아웃 되었습니다.");
    setToken("");
    await signOut();
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
    return (
      <div className={styles.profileImage}>
        <img height={200} src={user.photoURL} alt="프로필 이미지" />
        <p>{user.displayName}</p>
        <button onClick={handleSignOut}>로그아웃</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="많은 정보를 얻어가세요 !" />
      <form className={styles.form} onSubmit={handleSignIn}>
        <FormInput
          name="email"
          type="email"
          // autoComplete="on"
          label="이메일"
          placeholder="이메일 입력"
          onChange={handleChangeInput}
        />
        <FormInput
          name="password"
          type="password"
          // autoComplete="current-password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={handleChangeInput}
        />
        <SubmitButton
          title="로그인"
          writeButton={false}
          type="submit"
          className={styles.submitButton}
        />
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
