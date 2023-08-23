import { combineReducers } from "redux";
import authReducer from "./authReducer";
import signupReducer from "./signupReducer";
import addAppointmentReducer from "./addAppointmentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  addApp: addAppointmentReducer,
});

export default rootReducer;
