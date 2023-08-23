export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const setLoginStatus = (status) => ({
  type: "SET_LOGIN_STATUS",
  payload: status,
});


