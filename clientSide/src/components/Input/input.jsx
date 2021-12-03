import "./Input.css";

const Input = (props) => {
  const { labelText, type, inputPlaceholder, onChange } = props;

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

export default Input;
