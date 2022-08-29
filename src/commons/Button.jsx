import styles from "../styles/Button.module.scss";

const Button = ({ label, action }) => {
  return (
    <button className={styles.container} onClick={action}>
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
