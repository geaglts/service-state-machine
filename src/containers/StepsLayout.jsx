import Welcome from "../components/Welcome.jsx";
import Processing from "../components/Processing.jsx";

const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("init")) return <Welcome send={send} />;
    if (state.matches("processing")) return <Processing send={send} />;
    return null;
  };

  return <div>{renderContent()}</div>;
};

export default StepsLayout;
