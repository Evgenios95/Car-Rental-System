import "./LabeledInput.css";

const LabeledInput = (props) => {
  const {
    labelText,
    type,
    inputPlaceholder,
    onChange,
    className,
    defaultValue,
    valueAsDate,
  } = props;

  return (
    <div className={`input-container ${className}`}>
      <label htmlFor="labelText">{labelText}</label>
      <input
        type={type}
        placeholder={inputPlaceholder}
        onChange={onChange}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default LabeledInput;
