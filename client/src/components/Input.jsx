const Input = ({ name, type, ...rest }) => {
  return (
    <div className="w-full mt-3">
      <input
        type={type}
        name={name}
        placeholder={name}
        {...rest}
        className="bg-gray-200 py-2 px-3 rounded-md w-full"
      />
    </div>
  );
};

export default Input;
