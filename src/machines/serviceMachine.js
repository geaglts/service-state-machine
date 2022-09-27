// Metodo necesario para crear una maquina de estados
import { createMachine, assign } from "xstate";

// Definicion de una maquina de estados
/* Las maquinas de estados necesitan algunas
propiedades basicas como lo son:
- id
- initial
(en versiones nuevas de xstate el: predictableActionArguments: true)
- states: contienen todos los estados de nuestra maquina
- actions: (opcional) se definen funciones que se ejecutan entre tranciciones
o al entrar o salir de un estado */
const serviceMachine = createMachine(
  {
    id: "serviceMachine",
    initial: "init",
    context: {
      service: {},
      days: 0,
    },
    predictableActionArguments: true,
    states: {
      init: {
        on: {
          NEW_SERVICE: {
            target: "save_requirements",
            // ACCIONES: Eventos que se disparan entre transiciones.
            /* 
              En este caso, se disparara una acción llamada "startMachine"
              al momento de que se dispare el evento "NEW_SERVICE"
            */
            actions: "startMachine",
            // ^EVENTO DE TRANSICIÒN
          },
        },
      },
      save_requirements: {
        entry: "joinInSaveRequirements", // ACCION DE ENTRADA: AL MOMENTO DE ENTRAR AL ESTADO
        exit: "exitToSaveRequirements", // ACCION DE SALIDA: AL MOMENTO DE SALIR DEL ESTADO
        on: {
          SAVED: {
            target: "set_pay",
            actions: assign({
              service: (context, event) => event.service,
            }),
          },
          CANCEL: "init",
        },
      },
      set_pay: {
        on: {
          PAY: {
            target: "payment",
            actions: assign((context, event) => (context.days = event.days)),
          },
          CANCEL: {
            target: "save_requirements",
            actions: "removeRequirements",
          },
        },
      },
      payment: {
        // Con after: se puede definir un tiempo de espera para que se dispare un evento
        after: {
          4000: {
            target: "init",
            actions: "removeRequirements",
          },
        },
        on: {
          CANCEL: {
            target: "set_pay",
            actions: assign({ days: () => 0 }),
          },
          FINISH: "init",
        },
      },
    },
  },
  {
    actions: {
      /* Esta accion es disparada cuando se
      activa el evento "NEW_SERVICE" de "init" */
      startMachine: () => {
        console.log("Machine started");
      },
      /* Se ejecuta cuando entro a save_requirement */
      joinInSaveRequirements: () => {
        console.log("Entre al estado save_requirements");
      },
      /* Se ejecuta cuando salgo de save_requirement */
      exitToSaveRequirements: () => {
        console.log("Sali del estado save_requirements");
      },
      removeRequirements(context, event) {
        return (context.service = {});
      },
    },
  }
);

export default serviceMachine;
