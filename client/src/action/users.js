import axios from "axios";

export const SignInHandler = (data, navigate) => async (dispatch) => {
  const { email, password } = data;

  try {
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        isOpen: true,
        variant: "bg-green-50",
        textVariant: "text-green-500",
        msg: "Redirecting user...",
      },
    });
    const { data } = await axios.post(`http://localhost:8000/api/auth/signin`, {
      email,
      password,
    });

    dispatch({ type: "AUTH", payload: data });

    if (data) {
      navigate("/");
    }
    dispatch({
      type: "CLOSE_ALERT",
    });
  } catch (err) {
    const {
      response: { data },
    } = err;
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        isOpen: true,
        variant: "bg-red-50",
        textVariant: "text-red-500",
        msg: data?.msg,
      },
    });
    console.log(data);
  }
};

export const SignUpHandler = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/auth/signup`,
      formData
    );
    dispatch({ type: "AUTH", payload: data });

    dispatch({
      type: "OPEN_ALERT",
      payload: {
        isOpen: true,
        variant: "bg-green-50",
        textVariant: "text-green-500",
        msg: "Success create user",
      },
    });

    if (data) {
      navigate("/");
    }
  } catch (err) {
    return err;
  }
};
