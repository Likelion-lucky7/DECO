import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuestionCategory.module.css";

const QuestionCategory = ({ categoryPath = "", categoryName = "" }) => {
  return (
    <Link className={styles.category} to={categoryPath}>
      {categoryName}
    </Link>
  );
};

export default QuestionCategory;
