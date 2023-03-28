import React, { useId } from "react";
import styles from "./SearchForm.module.css";
import { ReactComponent as SearchIcon } from "@/assets/searchIcon.svg";

const SearchForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SearchIcon />
        <label>
          <input type="text" name="search" placeholder="키워드로 검색하기" />
        </label>
      </div>
    </div>
  );
};

export default SearchForm;
