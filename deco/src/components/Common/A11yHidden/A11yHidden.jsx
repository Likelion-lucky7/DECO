import styles from "./A11yHidden.module.css";

const A11yHidden = ({ as: Component, focusable, ...restProps }) => {
  return <Component className={styles.srOnly} {...restProps} />;
};

export default A11yHidden;
