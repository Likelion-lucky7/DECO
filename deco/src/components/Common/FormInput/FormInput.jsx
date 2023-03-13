import React from "react";
import classes from "./FormInput.module.css";

const FormInput = (label, type, ...restProps) => {
  return (
    <div className={classes.container}>
      <label htmlFor="id" className={classes.label}>
        아이디
      </label>
      <input
        id="id"
        type="text"
        className={classes.input}
        placeholder="아이디 입력"
        {...restProps}
      />
    </div>
  );
};

export default FormInput;
