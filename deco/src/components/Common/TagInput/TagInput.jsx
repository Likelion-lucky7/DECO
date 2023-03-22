import { bool, string } from "prop-types";
import styles from "./TagInput.module.css";
import { useRecoilState } from "recoil";
import { hashTagState } from "@/@store/hashTagState";

const TagInput = ({ isQuestion }) => {
  const [hashTag, setHashTag] = useRecoilState(hashTagState);
  const onChangeTag = (e) => {
    setHashTag(e.target.value);
  };
  return (
    <div>
      {isQuestion ? (
        <input
          type="text"
          placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 5개까지)"
          className={styles.tag_question}
          onChange={onChangeTag}
          value={hashTag}
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
