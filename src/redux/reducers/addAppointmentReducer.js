const initialState = {
  formData: {
    name: "",
    email: "",
    services: "",
    time: "",
    date: "",
    duration: "30 Min",
    status: "Pending",
    color: "yellow",
    reminder: "Notify",
    notified: false,
    reschedule: false,
  },
  formErrors: {
    name: "",
    email: "",
    services: "",
    contact: "",
    time: "",
    date: "",
  },
};

const addApointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "ADD_APPOINTMENT_ERROR":
      return {
        ...state,
        formErrors: { ...state.formErrors, ...action.payload },
      };
    case "RESET_APPOINTMENT":
      return initialState;
    default:
      return state;
  }
};

export default addApointmentReducer;
