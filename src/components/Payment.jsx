import Button from "../commons/Button";

import styles from "../styles/Payment.module.scss";

const Payment = ({ send }) => {
  const handleFinish = () => {
    send("FINISH");
  };

  return (
    <div className={styles.container}>
      <p className={styles.description_text}>
        Basándonos en tu solicitud calculamos un precio estimado de:
      </p>
      <p className={styles.price}>$0.00</p>
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
