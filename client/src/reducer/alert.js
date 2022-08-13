const initialState = {
  isOpen: false,
  textVariant: "",
  variant: "",
  msg: "",
};

export default function AlertReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "OPEN_ALERT":
      return {
        ...state,
        isOpen: true,
        msg: payload.msg,
        variant: payload.variant,
        textVariant: payload.textVariant,
      };
      break;

    case "CLOSE_ALERT":
      return {
        ...state,
        isOpen: false,
      };
      break;

    default:
      return state;
  }
}
