import styles from "./SubmitButton.module.css";

const SubmitButton = ({ writeButton, title, ...restProps }) => {
  return (
    <>
      {writeButton ? (
        <div className={styles.container_writeButton}>
          <button className={styles.button_writeButton} {...restProps}>
            {title}
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <button className={styles.button} {...restProps}>
            {title}
          </button>
        </div>
      )}
    </>
  );
};

export default SubmitButton;
