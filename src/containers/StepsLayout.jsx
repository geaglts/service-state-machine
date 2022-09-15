import Welcome from "../components/Welcome.jsx";
import SaveRequirements from "../components/SaveRequirements.jsx";

import Button from "../commons/Button.jsx";

import styles from "../styles/StepsLayout.module.scss";

const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("init")) return <Welcome send={send} />;
    if (state.matches("save_requirements"))
      return <SaveRequirements send={send} />;
    return null;
  };

  const handleCancel = () => {
    send("CANCEL");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Maquina de estado</h1>
        {(state.matches("processing") ||
          state.matches("save_requirements")) && (
          <Button
            label={"Cancelar"}
            action={handleCancel}
            type={"button"}
            styleButton="danger"
          />
        )}
      </header>
      <section className={styles.content}>{renderContent()}</section>
    </div>
  );
};

export default StepsLayout;
