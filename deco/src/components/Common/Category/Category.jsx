import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const Category = ({ category1 = "", category2 = "", path = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Link to={path} href={path}>
          전체
        </Link>
        <Link to="/" href="/">
          {category1}
        </Link>
        <Link to="/" href="/">
          {category2}
        </Link>
      </div>
    </div>
  );
};

export default Category;
