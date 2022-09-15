import { useId } from "react";

import styles from "../styles/TextArea.module.scss";

const TextArea = ({ label, ...rest }) => {
  const id = useId();

  const textareaId = id + "_textarea";
  const placeholder = "escribe " + label.toLowerCase();

  return (
    <div className={styles.container}>
      <label htmlFor={textareaId}>{placeholder}</label>
      <textarea id={textareaId} placeholder={placeholder} {...rest}></textarea>
    </div>
  );
};

TextArea.defaultProps = {
  label: "textarea",
};

export default TextArea;
