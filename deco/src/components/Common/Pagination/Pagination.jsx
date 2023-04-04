import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";
import { ReactComponent as LeftPage } from "@/assets/leftPage.svg";
import { ReactComponent as RightPage } from "@/assets/rightPage.svg";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <Link to="">
        <LeftPage />
      </Link>

      <Link to="">1</Link>
      <Link to="">2</Link>
      <Link to="">3</Link>
      <Link to="">4</Link>
      <Link to="">5</Link>

      <Link to="">
        <RightPage />
      </Link>
    </div>
  );
};

export default Pagination;
