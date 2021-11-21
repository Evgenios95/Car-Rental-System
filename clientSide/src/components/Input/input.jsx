import "./input.css";

const InputComponent = (props) => {
  const { labelText, inputPlaceholder, onChange } = props;

  return (
    <div className="inputContainer login-input-item">
      <label htmlFor="">{labelText}</label>
      <input
        type="text"
        placeholder={inputPlaceholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputComponent;
