import { useId, useRef } from "react";
import { bool, string } from "prop-types";
import styles from "./FormInput.module.css";

const FormInput = ({ label, type, placeholder, ...restProps }) => {
  const id = useId();
  const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      {renderLabel(id, label)}
      <input
        ref={inputRef}
        id={id}
        type={type}
        className={styles.input}
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
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
  );
}
