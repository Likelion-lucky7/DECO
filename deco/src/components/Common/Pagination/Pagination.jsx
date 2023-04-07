import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";
import { ReactComponent as LeftPage } from "@/assets/leftPage.svg";
import { ReactComponent as RightPage } from "@/assets/rightPage.svg";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <Link to="" title="이전 페이지" aria-label="이전 페이지">
        <LeftPage />
      </Link>

      <ul className={styles.paginate}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <span onClick={() => paginate(number)} className={styles.pageSpan}>
              {number}
            </span>
          </li>
        ))}
      </ul>

      <Link to="" title="다음 페이지" aria-label="다음 페이지">
        <RightPage />
      </Link>
    </div>
  );
};

export default Pagination;
