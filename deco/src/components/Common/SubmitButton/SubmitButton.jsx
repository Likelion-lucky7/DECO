import styles from "./SubmitButton.module.css";

const SubmitButton = ({ writeButton, title }) => {
  return (
    <>
      {writeButton ? (
        <div className={styles.container_writeButton}>
          <button className={styles.button_writeButton}>{title}</button>
        </div>
      ) : (
        <div className={styles.container}>
          <button className={styles.button}>{title}</button>
        </div>
      )}
    </>
  );
};

export default SubmitButton;