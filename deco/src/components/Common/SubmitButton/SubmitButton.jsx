import React from "react";
import classes from "./SubmitButton.module.css";

const SubmitButton = () => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>로그인</button>
    </div>
  );
};

export default SubmitButton;
