// src/redux/reducers/authReducer.js

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, loggedIn: false, user: null };
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case "SIGNUP":
      return {
        ...state,
        formState: { ...state.formState, ...action.payload },
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        formErrors: { ...action.payload },
      };
    case "RESET_SIGNUP":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
