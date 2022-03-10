import axios from "axios";

const host =
  "https://registry-api-dot-nord-registry.lm.r.appspot.com";

const createAppointmentEndpoint = `${host}/api/appointments`;
const createDoctorEndpoint = `${host}/api/doctors`;

export const createAppointmentScript = async () => {
  const doctorCreateRequest = {
    name: "Doctor",
    surname: "Doctorrr",
    speciality: "doctor",
    contactNumber: "777"
  };

  const createDoctorResponce = await axios.post(
    createDoctorEndpoint,
    doctorCreateRequest
  );

  const doctorId = createDoctorResponce.data;

  const appointmentCreateRequest = {
    doctorId: doctorId,
    appointmentDate: "2022-03-10T19:19:18.443Z"
  };

  const createAppointmentResponce = await axios.post(
    createAppointmentEndpoint,
    appointmentCreateRequest
  );

  const appointmentId = createAppointmentResponce.data;

  const result = `appointment was created with id:${appointmentId}`;

  return result;
};
