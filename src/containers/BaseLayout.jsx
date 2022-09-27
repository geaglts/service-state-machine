import { useMachine } from "@xstate/react";
import serviceMachine from "../machines/serviceMachine";

import StepsLayout from "./StepsLayout";

import styles from "../styles/BaseLayout.module.scss";

const BaseLayout = () => {
  const [state, send] = useMachine(serviceMachine);

  console.log(state.context);

  return (
    <div className={styles.container}>
      <StepsLayout state={state} send={send} />
    </div>
  );
};

export default BaseLayout;
