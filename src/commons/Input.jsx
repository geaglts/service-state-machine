import { useId } from "react";

import styles from "../styles/Input.module.scss";
import classnames from "../utils/classnames";

const Input = ({ label, classes, ...rest }) => {
  const inputId = useId();

  const placeholder = "escribe " + label.toLowerCase();

  return (
    <div className={classnames(styles.container, ...classes)}>
      <label htmlFor={inputId + "_input"}>{label}</label>
      <input id={inputId + "_input"} placeholder={placeholder} {...rest} />
    </div>
  );
};

Input.defaultProps = {
  classes: [],
  label: "input",
  type: "text",
};

export default Input;
