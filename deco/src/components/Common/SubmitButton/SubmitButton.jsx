import styles from "./SubmitButton.module.css";

const SubmitButton = ({ props }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{props}</button>
    </div>
  );
};

export default SubmitButton;
