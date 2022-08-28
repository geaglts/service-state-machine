import { useMachine } from "@xstate/react";
import serviceMachine from "../machines/serviceMachine";

const BaseLayout = () => {
  const [state, send] = useMachine(serviceMachine);
  console.log("state machine:", state);
  return <div>🎉</div>;
};

export default BaseLayout;
