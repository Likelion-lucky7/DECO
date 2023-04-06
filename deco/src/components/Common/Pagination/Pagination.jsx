import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";
import { ReactComponent as LeftPage } from "@/assets/leftPage.svg";
import { ReactComponent as RightPage } from "@/assets/rightPage.svg";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <Link to="" title="이전 페이지" aria-label="이전 페이지">
        <LeftPage />
      </Link>

      <Link to="">1</Link>
      <Link to="">2</Link>
      <Link to="">3</Link>
      <Link to="">4</Link>
      <Link to="">5</Link>

      <Link to="" title="다음 페이지" aria-label="다음 페이지">
        <RightPage />
      </Link>
    </div>
  );
};

export default Pagination;
