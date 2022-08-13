import { useSelector, useDispatch } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex justify-between items-center w-full py-2 px-3 rounded-md ${alert?.variant}`}
    >
      <h4 className={`text-md font-semibold ${alert?.textVariant}`}>
        {alert?.msg}
      </h4>
      <button
        onClick={() => dispatch({ type: "CLOSE_ALERT" })}
        className={`${alert?.textVariant} font-bold text-lg`}
      >
        x
      </button>
    </div>
  );
};

export default Alert;
