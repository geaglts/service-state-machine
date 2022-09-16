import { createMachine } from "xstate";

const serviceMachine = createMachine({
  id: "serviceMachine",
  initial: "init",
  predictableActionArguments: true,
  states: {
    init: {
      on: {
        NEW_SERVICE: "save_requirements",
      },
    },
    save_requirements: {
      on: {
        SAVED: "set_pay",
        CANCEL: "init",
      },
    },
    set_pay: {
      on: {
        pay: "deliver",
        CANCEL: "save_requirements",
      },
    },
    deliver: {},
  },
});

export default serviceMachine;
