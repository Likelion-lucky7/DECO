import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "@/assets/logo_big.svg";
import A11yHidden from "./A11yHidden/A11yHidden";
import { useAuthState, useSignOut } from "@/firebase/auth";
import { RecoilRoot, useRecoilState } from "recoil";
import { tokenState } from "@/@store/authUserState";

const NavBar = () => {
  const { isLoading, error, user } = useAuthState();

  // token을 이용한 로그인 여부에 따라 NavBar 디자인이 바뀌게 함
  // 뭔가 필요 없는 거 같음..
  const [token, setToken] = useRecoilState(tokenState);
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    alert("로그아웃 되었습니다.");
    setToken("");
    signOut();

    // replace : 뒤로가기 방지
    navigate("/", { replace: true });
  };

  // 유저 정보가 있을 경우 return (로그인을 했을 경우)
  if (user) {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.inner}>
            <A11yHidden as="h1">로고</A11yHidden>
            <Link to="/">
              <Logo className={styles.logo} />
            </Link>

            <div className={styles.container}>
              <ul className={styles.navigation}>
                <li className={styles.question}>
                  <Link to="/question">묻고 답하기</Link>
                </li>
                <li className={styles.community}>
                  <Link to="/community">커뮤니티</Link>
                </li>
                <li className={styles.sideProject}>
                  <Link to="/sideproject">사이드 프로젝트</Link>
                </li>
              </ul>
              <ul className={styles.account}>
                <li className={styles.login}>
                  <img
                    className={styles.profile}
                    src={user?.photoURL}
                    alt="프로필 이미지"
                  />
                  <span>{user?.displayName}</span>
                </li>

                <li className={styles.join}>
                  <Link to="/" onClick={handleSignOut}>
                    로그아웃
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <A11yHidden as="h1">로고</A11yHidden>
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>

          <div className={styles.container}>
            <ul className={styles.navigation}>
              <li className={styles.question}>
                <Link to="/question">묻고 답하기</Link>
              </li>
              <li className={styles.community}>
                <Link to="/community">커뮤니티</Link>
              </li>
              <li className={styles.sideProject}>
                <Link to="/sideproject">사이드 프로젝트</Link>
              </li>
            </ul>

            <ul className={styles.account}>
              <li className={styles.login}>
                <Link to="/login">로그인</Link>
              </li>
              <li className={styles.join}>
                <Link to="/signup">회원가입</Link>
              </li>
            </ul>

            {/* {token ? (
              <ul className={styles.account}>
                <li className={styles.login}>
                  <img
                    className={styles.profile}
                    src={user?.photoURL}
                    alt="프로필 이미지"
                  />
                  <span>{user?.displayName}</span>
                </li>

                <li className={styles.join}>
                  <Link to="/" onClick={handleSignOut}>
                    로그아웃
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className={styles.account}>
                <li className={styles.login}>
                  <Link to="/login">로그인</Link>
                </li>
                <li className={styles.join}>
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            )} */}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
