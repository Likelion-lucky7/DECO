import { bool, string } from "prop-types";
import styles from "./TagInput.module.css";
import { useRecoilState } from "recoil";
import { hashTagState } from "@/@store/hashTagState";
// import { useState } from "react";
import { hashTagListState } from "../../../@store/hashTagListState";

const TagInput = ({ isQuestion }) => {
  const [tagItem, setTagItem] = useRecoilState(hashTagState);
  const [tagList, setTagList] = useRecoilState(hashTagListState);

  const isEmptyValue = (value) => {
    if (!value.length) {
      return true;
    }
    return false;
  };

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }

    if (isEmptyValue(e.target.value.trim())) {
      return setTagItem("");
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    if (updatedTagList.length >= 5) return;
    updatedTagList.push(tagItem.trim());
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
            placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 최대 5개까지)"
            className={styles.tag_question}
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
            onKeyUp={onKeyPress}
          />
        ) : (
          <input
            type="text"
            placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 최대 5개까지)"
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
