import Button from "../commons/Button";
import Input from "../commons/Input";

import styles from "../styles/SetPay.module.scss";

const SetPay = ({ send }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    send("PAY");
  };

  return (
    <div className={styles.container}>
      <h2>Para cuando lo necesitas</h2>
      <form className={styles.form}>
        <Input
          name={"days"}
          label={"En cuantos días lo necesitas"}
          type="number"
          min="1"
          max="30"
        />
        <Button
          label={"Cuanto me costara?"}
          onClick={handleSubmit}
          type="submit"
        />
      </form>
    </div>
  );
};

export default SetPay;
