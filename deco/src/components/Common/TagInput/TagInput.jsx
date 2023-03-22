import { bool, string } from "prop-types";
import styles from "./TagInput.module.css";
import { useRecoilState } from "recoil";
import { hashTagState } from "@/@store/hashTagState";
import { useState } from "react";

const TagInput = ({ isQuestion }) => {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onChangeTag = (e) => {
    setTagItem(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    console.log(tagList);
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setTagList(filteredTagList);
  };

  return (
    <div className={styles.box}>
      {tagList.map((hashTag, idx) => {
        return (
          <div key={idx} className={styles.item}>
            <span>{hashTag}</span>
            <button onClick={deleteTagItem} className={styles.hashButton}>
              ✕
            </button>
          </div>
        );
      })}

      <div className={styles.inputWrapper}>
        <span className={styles.hash}>#</span>
        {isQuestion ? (
          <input
            type="text"
            placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등)"
            className={styles.tag_question}
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
            onKeyUp={onKeyPress}
          />
        ) : (
          <input
            type="text"
            placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등)"
            className={styles.tag}
          />
        )}
      </div>
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
