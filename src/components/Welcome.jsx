import Button from "../commons/Button";

import styles from "../styles/Welcome.module.scss";

const Welcome = ({ send }) => {
  const sendToProcessing = () => {
    send("NEW_SERVICE");
  };

  return (
    <div className={styles.container}>
      <p>Bienvenido a esta maquina de estado.</p>
      <p>Puedes pedir un servicio o cancelarlo si lo deseas.</p>
      <Button
        label={"Quiero un servicio :D"}
        type="button"
        action={sendToProcessing}
      />
    </div>
  );
};

export default Welcome;
