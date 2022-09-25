import { useEffect, useState } from "react";
import Button from "../commons/Button";

import styles from "../styles/Payment.module.scss";

const DEFAULT_PRICE = 400;

const Payment = ({ state, send }) => {
  const [payment, setPayment] = useState(0);

  const handleFinish = () => {
    send("FINISH");
  };

  useEffect(() => {
    const { days } = state.context;
    if (days > 5 && days < 11) {
      const price = DEFAULT_PRICE - DEFAULT_PRICE * 0.1;
      setPayment(price);
    } else if (days > 10) {
      const price = DEFAULT_PRICE - DEFAULT_PRICE * 0.2;
      setPayment(price);
    } else {
      setPayment(DEFAULT_PRICE);
    }
  }, [state.context]);

  return (
    <div className={styles.container}>
      <p className={styles.description_text}>
        Basándonos en tu solicitud calculamos un precio estimado de:
      </p>
      <p className={styles.price}>${payment}</p>
      <Button
        label={"Adelante!"}
        type="button"
        onClick={handleFinish}
        styleButton="success"
      />
    </div>
  );
};

export default Payment;
