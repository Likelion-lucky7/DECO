import { useId, useRef } from "react";
import styles from "./SearchForm.module.css";
import { ReactComponent as SearchIcon } from "@/assets/searchIcon.svg";

const SearchForm = () => {
  const id = useId();
  const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SearchIcon />
        <label htmlFor={id} className={styles.hidden}>
          키워드 검색
        </label>
        <input
          ref={inputRef}
          id={id}
          type="text"
          name="search"
          placeholder="키워드로 검색하기"
        />
      </div>
    </div>
  );
};

export default SearchForm;
