import "./input.css";

const InputComponent = (props) => {
  const { labelText, inputPlaceholder, type, onChange } = props;

  return (
    <div className="inputContainer login-input-item">
      <label htmlFor="">{labelText}</label>
      <input
        type={type}
        placeholder={inputPlaceholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputComponent;
