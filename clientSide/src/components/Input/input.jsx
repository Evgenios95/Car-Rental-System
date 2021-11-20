import "./input.css";

const InputComponent = (props) => {
  const { labelText, type, inputPlaceholder } = props;

  return (
    <div className="inputContainer login-input-item">
      <label htmlFor="">{labelText}</label>
      <input type={type} placeholder={inputPlaceholder} required />
    </div>
  );
};

export default InputComponent;
