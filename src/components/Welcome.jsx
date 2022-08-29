import Button from "../commons/Button";

const Welcome = ({ send }) => {
  const sendToProcessing = () => {
    send("NEW_SERVICE");
  };

  return (
    <div>
      <p>Bienvenido a esta maquina de estado.</p>
      <p>Puedes pedir un servicio o cancelarlo si lo deseas.</p>
      <Button label={"Quiero un servicio :D"} action={sendToProcessing} />
    </div>
  );
};

export default Welcome;
