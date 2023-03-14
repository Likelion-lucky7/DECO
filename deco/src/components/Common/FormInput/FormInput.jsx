import { useId, useRef } from "react";
import { bool, string } from "prop-types";
import classes from "./FormInput.module.css";

const FormInput = ({ label, type, placeholder, ...restProps }) => {
  const id = useId();
  const inputRef = useRef(null);

  return (
    <div className={classes.container}>
      {renderLabel(id, label)}
      <input
        ref={inputRef}
        id={id}
        type={type}
        className={classes.input}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default FormInput;

/* Props */
FormInput.defualtProps = {
  type: "text",
  placeholder: string,
  inputed: false,
};

FormInput.propTypes = {
  type: string,
  label: string.isRequired,
  placeholder: string,
  inputed: bool,
};

/* Render Function */
function renderLabel(id, label) {
  return (
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
  );
}
