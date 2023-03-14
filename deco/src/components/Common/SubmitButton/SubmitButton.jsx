import classes from "./SubmitButton.module.css";

const SubmitButton = ({ props }) => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>{props}</button>
    </div>
  );
};

export default SubmitButton;
