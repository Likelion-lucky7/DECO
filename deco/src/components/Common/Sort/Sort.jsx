import styles from "./Sort.module.css";

const Sort = ({ ...restprops }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.sortNew}
        type="button"
        name="new"
        {...restprops}
      >
        최신순
      </button>

      <button
        className={styles.sortRecommendation}
        type="button"
        name="like"
        {...restprops}
      >
        추천순
      </button>
    </div>
  );
};

export default Sort;
