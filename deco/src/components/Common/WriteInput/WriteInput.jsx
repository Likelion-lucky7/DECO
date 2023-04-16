import { useId } from "react";
import styles from "./WriteInput.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputCountState, titleState } from "@/@store/titleState";
import { contentState } from "@/@store/contentState";
import { bool, string } from "prop-types";

const WriteInput = ({ isWrite, ...restProps }) => {
  const id = useId();

  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useRecoilState(contentState);
  const count = useRecoilValue(inputCountState);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className={styles.container}>
      {isWrite ? (
        <>
          <label htmlFor={id} className={styles.hidden}>
            제목 입력란
          </label>
          <input
            id={id}
            type="text"
            placeholder="제목을 입력해주세요."
            className={styles.title_question}
            onChange={onChangeTitle}
            value={title}
          />
          <span className={styles.totalNumber_question}>{count} / 100</span>
          <label htmlFor={id} className={styles.hidden}>
            내용 입력란
          </label>
          <textarea
            name="content"
            id={id}
            cols="30"
            rows="10"
            placeholder="궁금한 내용을 적어주세요.&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어요."
            className={styles.content_question}
            onChange={onChangeContent}
            value={content}
          ></textarea>
        </>
      ) : (
        <form>
          <label htmlFor={id} className={styles.hidden}>
            제목 입력란
          </label>
          <input
            id={id}
            type="text"
            placeholder="제목을 입력해주세요."
            className={styles.title}
          />
          <span className={styles.totalNumber}>{count} / 100</span>
          <label htmlFor={id} className={styles.hidden}>
            내용 입력란
          </label>
          <textarea
            name="content"
            id={id}
            cols="30"
            rows="10"
            placeholder="궁금한 내용을 적어주세요.&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어요."
            className={styles.content}
          ></textarea>
        </form>
      )}
    </div>
  );
};

export default WriteInput;
