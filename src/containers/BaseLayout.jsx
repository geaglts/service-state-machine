import { useMachine } from "@xstate/react";
import serviceMachine from "../machines/serviceMachine";

import StepsLayout from "./StepsLayout";

const BaseLayout = () => {
  const [state, send] = useMachine(serviceMachine);
  return (
    <div>
      <StepsLayout state={state} send={send} />
    </div>
  );
};

export default BaseLayout;
