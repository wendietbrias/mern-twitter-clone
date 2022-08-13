const initialState = JSON.parse(localStorage.getItem("user"));
const AuthReducer = (state = initialState || null, { type, payload }) => {
  if (type === "AUTH") {
    state = payload;
    localStorage.setItem("user", JSON.stringify(state));
    return state;
  }

  if (type === "LOGOUT") {
    state = null;
    localStorage.setItem("user", JSON.stringify(state));
    return state;
  } else {
    return state;
  }
};

export default AuthReducer;
