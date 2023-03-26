import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const Category = ({ category1 = "", category2 = "", path = "",...restprps }) => {

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button to={path} href={path} name="all" {...restprps} >
          전체
        </button>
        <button to="/" href="/" name={category1} {...restprps} >
          {category1}
        </button>
        <button to="/" href="/" name={category2} {...restprps} >
          {category2}
        </button>
      </div>
    </div>
  );
};

export default Category;
