import React from "react";
import styles from "./Category.module.css";

const Category = ({ category1 = "", category2 = "", path = "",...restprops }) => {

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button to={path} href={path} name="all" {...restprops} >
          전체
        </button>
        <button to="/" href="/" name={category1} {...restprops} >
          {category1}
        </button>
        <button to="/" href="/" name={category2} {...restprops} >
          {category2}
        </button>
      </div>
    </div>
  );
};

export default Category;
