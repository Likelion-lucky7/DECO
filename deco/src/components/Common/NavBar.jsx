import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "@/assets/logo_big.svg";
import { useAuthState, useSignOut } from "@/firebase/auth";

const NavBar = () => {
  const { isLoading, error, user } = useAuthState();
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    alert("로그아웃 되었습니다.");
    signOut();

    // replace : 뒤로가기 방지
    navigate("/", { replace: true });
  };

  // 유저 정보가 있을 경우 return (로그인을 했을 경우)
  if (user) {
    return (
      <>
        <header className={styles.header}>
          <nav className={styles.inner}>
            <h1>
              <Link
                to="/"
                title="메인페이지로 이동"
                aria-label="메인페이지로 이동"
                className={styles.link}
              >
                <Logo className={styles.logo} />
              </Link>
            </h1>
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
          </nav>
        </header>
      </>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.inner}>
          <h1>
            <Link
              to="/"
              title="메인페이지로 이동"
              aria-label="메인페이지로 이동"
              className={styles.link}
            >
              <Logo className={styles.logo} />
            </Link>
          </h1>

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
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
