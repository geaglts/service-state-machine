import Button from "../commons/Button";
import Input from "../commons/Input";
import TextArea from "../commons/TextArea";

import styles from "../styles/SaveRequirements.module.scss";

const Processing = ({ send }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aceptando servicio");
    send("SAVED");
  };

  return (
    <div>
      <h2>Cuéntanos que necesitas</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input name={"applicant"} label={"Quien solicita el servicio"} />
        <Input name={"task"} label={"Que servicio se va a realizar"} />
        <TextArea
          name={"description"}
          label="Cual es la descripcion del servicio"
          rows="4"
        />
        <Button label={"Listo!"} type="submit" />
      </form>
    </div>
  );
};

export default Processing;
