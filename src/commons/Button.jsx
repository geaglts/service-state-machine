import styles from "../styles/Button.module.scss";

const Button = ({ label, action, styleButton = "normal", ...rest }) => {
  return (
    <button
      className={`${styles.container} ${styles[styleButton]}`}
      onClick={rest.type === "button" ? action : null}
      {...rest}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "button",
  action: () => {
    console.log("i'm a button");
  },
};

export default Button;
