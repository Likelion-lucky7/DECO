import { bool, string } from "prop-types";
import styles from "./TagInput.module.css";

const TagInput = ({ isQuestion }) => {
  return (
    <div>
      {isQuestion ? (
        <input
          type="text"
          placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 5개까지)"
          className={styles.tag_question}
        />
      ) : (
        <input
          type="text"
          placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 5개까지)"
          className={styles.tag}
        />
      )}
    </div>
  );
};

export default TagInput;

/* Props */
TagInput.defualtProps = {
  type: "text",
  placeholder: string,
  inputed: false,
};
