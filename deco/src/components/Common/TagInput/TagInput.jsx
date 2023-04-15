/* eslint-disable no-useless-escape */
import { bool, string } from "prop-types";
import styles from "./TagInput.module.css";
import { useRecoilState } from "recoil";
import { hashTagState } from "@/@store/hashTagState";
import { hashTagListState } from "../../../@store/hashTagListState";
import { useId } from "react";

const TagInput = ({ isWrite }) => {
  const id = useId();
  const [inputHashTag, setInputHashTag] = useRecoilState(hashTagState);
  const [hashTags, setHashTags] = useRecoilState(hashTagListState);

  const addHashTag = (e) => {
    const allowedCommand = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!allowedCommand.includes(e.code)) return;
    if ([...hashTags].length >= 5) return;

    const isEmptyValue = (value) => {
      if (!value.length) {
        return true;
      }
      return false;
    };

    if (isEmptyValue(e.target.value.trim())) {
      return setInputHashTag("");
    }

    let newHashTag = e.target.value.trim();
    const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }
    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (isEmptyValue(newHashTag)) return;

    setHashTags((prevHashTags) => {
      return [...new Set([...prevHashTags, newHashTag])];
    });

    setInputHashTag("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = hashTags.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setHashTags(filteredTagList);
  };

  return (
    <div className={styles.tagBox}>
      {hashTags.map((hashTag, idx) => {
        return (
          <div key={idx} className={styles.tagItem}>
            <span className={styles.fontColor}>{hashTag}</span>
            <button onClick={deleteTagItem} className={styles.hashButton}>
              ✕
            </button>
          </div>
        );
      })}

      <div className={styles.inputWrapper}>
        <span>#</span>
        {isWrite ? (
          <>
            <label htmlFor={id} className={styles.hidden}>
              해쉬태그 입력란
            </label>
            <input
              type="text"
              placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 최대 5개까지)"
              className={styles.tag_question}
              onChange={(e) => setInputHashTag(e.target.value)}
              value={inputHashTag}
              onKeyUp={addHashTag}
              id={id}
            />
          </>
        ) : (
          <>
            <label htmlFor={id} className={styles.hidden}>
              해쉬태그 입력란
            </label>
            <input
              type="text"
              placeholder="태그 1개 이상 필수 입력 (예: #react, #javascript 등 최대 5개까지)"
              className={styles.tag}
              id={id}
            />
          </>
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
