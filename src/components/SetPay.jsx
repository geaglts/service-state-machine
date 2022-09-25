import { useState } from "react";
import Button from "../commons/Button";
import Input from "../commons/Input";

import styles from "../styles/SetPay.module.scss";

const SetPay = ({ send }) => {
  const [days, setDays] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    send("PAY", { days });
  };

  const handleChangeDay = (e) => {
    setDays(parseInt(e.target.value, 10));
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
          onChange={handleChangeDay}
          value={days}
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
