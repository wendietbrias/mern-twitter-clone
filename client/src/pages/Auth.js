import { BsTwitter } from "react-icons/bs";
import { Input, Alert } from "../components";
import { useState, useEffect } from "react";
import { SignInHandler, SignUpHandler } from "../action/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const { auth, alert } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClear = () => {
    setUserForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (userForm.email === "" || userForm.password === "") {
        return alert("please complete field");
      }

      dispatch(SignUpHandler(userForm, navigate));
    } else {
      dispatch(SignInHandler(userForm, navigate));
    }

    handleClear();
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="w-full px-5 md:px-0 xl:px-0 bg-gray-800 flex justify-center min-h-screen items-center">
      <div className="w-full md:w-[65%] xl:w-[35%] bg-white py-7 shadow-lg text-center rounded-md">
        <BsTwitter className="text-3xl mx-auto text-blue-500" />
        <h2 className="rounded-lg mt-3 text-xl text-gray-800 font-bold">
          {isSignUp ? "Twitter Register" : "Twitter Login"}
        </h2>
        <form onSubmit={handleAuth} className="w-full mt-5 px-5 xl:px-10">
          {alert.isOpen ? <Alert /> : null}
          {isSignUp ? (
            <Input
              onChange={(e) =>
                setUserForm({ ...userForm, [e.target.name]: e.target.value })
              }
              value={userForm?.name}
              name="name"
              type="text"
            />
          ) : null}
          <Input
            onChange={(e) =>
              setUserForm({ ...userForm, [e.target.name]: e.target.value })
            }
            value={userForm?.email}
            name="email"
            type="email"
          />
          <Input
            onChange={(e) =>
              setUserForm({ ...userForm, [e.target.name]: e.target.value })
            }
            value={userForm?.password}
            name="password"
            type="password"
          />
          <button
            type="submit"
            className="text-md font-semibold mt-5 w-full py-2 text-white bg-blue-500 rounded-md"
          >
            {isSignUp ? "Signup Twitter" : "Signin Twitter"}
          </button>
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-gray-500 cursor-pointer font-semibold block mt-5"
          >
            {isSignUp
              ? "already have account? login"
              : "Don't have account? register"}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Auth;
