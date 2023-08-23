export const setFormState = (formData) => ({
  type: "SIGNUP",
  payload: formData,
});
export const setFormErrors = (formData) => ({
  type: "SIGNUP_ERROR",
  payload: formData,
});
export const resetFormState = (f) => ({
  type: "RESET_SIGNUP",
});
