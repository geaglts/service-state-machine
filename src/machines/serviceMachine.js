import { createMachine } from "xstate";

const serviceMachine = createMachine({
  id: "serviceMachine",
  initial: "init",
  states: {
    init: {
      on: {
        init: {
          on: {
            NEW_SERVICE: "processing",
          },
        },
        processing: {
          on: {
            BAD_REQUEST: "init",
            ACCEPTED: "save_requirements",
          },
        },
        save_requirements: {
          on: {
            SAVED: "making",
            CANCEL: "init",
          },
        },
        making: {
          on: {
            FIND_ERROR: "processing",
            COMPLETED: "set_pay",
          },
        },
        set_pay: {
          on: {
            pay: "deliver",
          },
        },
        deliver: {},
      },
    },
  },
});

export default serviceMachine;
