import axios from "axios";

const host =
  "https://registry-api-dot-nord-registry.lm.r.appspot.com";

const getAppointmentsEndpoint = `${host}/api/appointments`;
const assignAppoitnmentEndpoint = `${host}/api/appointments/assign`;
const createPatientEndpoint = `${host}/api/patients`;

export const assignAppointmentScript = async () => {
  const responce = await axios.get(getAppointmentsEndpoint);
  const appointments = responce.data;

  if (!appointments.length) {
    const result = `no appointments to assign`;
    return result;
  }

  const randomIndex = Math.floor(Math.random() * appointments.length);
  const appointment = appointments[randomIndex];

  const patientCreateRequest = {
    name: "Patient",
    surname: "Patienttt",
    birthDate: "2022-03-10T19:24:37.205Z",
    contactNumber: "888"
  };

  const createPatientResponce = await axios.post(
    createPatientEndpoint,
    patientCreateRequest
  );

  const patientId = createPatientResponce.data;

  const appointmentAssignRequest = {
    id: appointment.id,
    isRecorded: true,
    patientId: patientId
  };

  try {
    await axios.post(assignAppoitnmentEndpoint, appointmentAssignRequest);

    const result = `received appointment with id:${appointment.id}, appointment assigned`;
    return result;
  } catch (e) {
    const result = `received appointment with id:${appointment.id}, can't assign appointment`;
    return result;
  }
};
