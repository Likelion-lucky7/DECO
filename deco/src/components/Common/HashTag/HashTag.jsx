import { Link } from "react-router-dom";
import styles from "./Hashtag.module.css";

const Hashtag = ({ contentPath = "/", content = "" }) => {
  return (
    <Link className={styles.hashtag} to={contentPath}>
      &#35;{content}
    </Link>
  );
};

export default Hashtag;
