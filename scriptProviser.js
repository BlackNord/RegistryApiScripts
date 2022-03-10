import { assignAppointmentScript } from "./scripts/assignAppointmentScript.js";
import { createAppointmentScript } from "./scripts/createAppointmentScript.js";

export const getRandomScript = () => {
  const scripts = [createAppointmentScript, assignAppointmentScript];

  const randomIndex = Math.floor(Math.random() * scripts.length);
  const result = scripts[randomIndex];

  return result;
};
