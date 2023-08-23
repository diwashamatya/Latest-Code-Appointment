// src/redux/reducers/authReducer.js

const initialState = {
  formState: {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  },
  formErrors: {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  },
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        formState: { ...state.formState, ...action.payload },
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        formErrors: { ...state.formErrors, ...action.payload }, // Update form errors
      };

    case "RESET_SIGNUP":
      return initialState;
    default:
      return state;
  }
};

export default signupReducer;
