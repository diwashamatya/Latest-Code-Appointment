export const setAppointmentForm = (FormData) => ({
  type: "ADD_APPOINTMENT",
  payload: FormData,
});

export const setAppointmentFormError = (FormData) => ({
  type: "ADD_APPOINTMENT_ERROR",
  payload: FormData,
});

export const resetAppointmentForm = (f) => ({
  type: "RESET_APPOINTMENT",
});
