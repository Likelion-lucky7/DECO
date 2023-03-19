import { useId } from "react";
import styles from "./SubmitButton.module.css";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { titleState } from "@/@store/titleState";

const SubmitButton = ({ writeButton, title, ...restProps }) => {
  const id = useId();
  const inputTitle = useRecoilValue(titleState);

  const submitTitle = async () => {
    try {
      await axios
        .post(`http://localhost:3001/questionPost/`, {
          title: inputTitle,
        })
        .then(console.log("get data"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {writeButton ? (
        <div className={styles.container_writeButton}>
          <button
            onClick={submitTitle}
            id={id}
            className={styles.button_writeButton}
            {...restProps}
          >
            {title}
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <button id={id} className={styles.button} {...restProps}>
            {title}
          </button>
        </div>
      )}
    </>
  );
};

export default SubmitButton;
