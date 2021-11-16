import "./input.css";

const InputComponent = (props) => {
  const { labelText, inputPlaceholder } = props;


  return (
    <div className="inputContainer login-input-item">
      <label htmlFor="">{labelText}</label>
      <input type="text" placeholder={inputPlaceholder} required />
    </div>
  );
};

export default InputComponent;
