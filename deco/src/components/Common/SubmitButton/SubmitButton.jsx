import { useId } from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ writeButton, title, ...restProps }) => {
  const id = useId();
  return (
    <>
      {writeButton ? (
        <div className={styles.container_writeButton}>
          <button id={id} className={styles.button_writeButton} {...restProps}>
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
