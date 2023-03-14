import { useId } from "react";
import styles from "./WriteInput.module.css";

const WriteInput = () => {
  const id = useId();

  return (
    <div className={styles.container}>
      <input
        id={id}
        type="text"
        placeholder="제목을 입력해주세요."
        className={styles.title}
      />
      <span className={styles.totalNumber}>0 / 100</span>

      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="궁금한 내용을 적어주세요.&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어요."
        className={styles.content}
      ></textarea>
    </div>
  );
};

export default WriteInput;
