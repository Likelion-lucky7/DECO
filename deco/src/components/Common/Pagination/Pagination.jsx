import styles from "./Pagination.module.css";
import { ReactComponent as LeftPage } from "@/assets/leftPage.svg";
import { ReactComponent as RightPage } from "@/assets/rightPage.svg";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const MAX_PAGE_COUNT = 2;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const getPaginationArray = (currentPage, )

  const previousButton = () => {
    paginate(currentPage - 1);
  };

  const nextButton = () => {
    paginate(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.paginationButton}
        title="이전 페이지"
        aria-label="이전 페이지"
        onClick={previousButton}
        disabled={currentPage === 1}
      >
        <LeftPage />
      </button>

      <ul className={styles.paginate}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              aria-current={currentPage === number ? "currentPage" : null}
              className={styles.pageNumber}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles.paginationButton}
        title="다음 페이지"
        aria-label="다음 페이지"
        onClick={nextButton}
        disabled={currentPage === pageNumbers.length}
      >
        <RightPage />
      </button>
    </div>
  );
};

export default Pagination;
