import "./LabeledInput.css";

const LabeledInput = ({
  labelText,
  type,
  inputPlaceholder,
  onChange,
  className,
  defaultValue,
  min,
  title,
  pattern,
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor="labelText">{labelText}</label>
      <input
        type={type}
        placeholder={inputPlaceholder}
        onChange={onChange}
        defaultValue={defaultValue}
        min={min}
        pattern={pattern}
        title={title}
        required
      />
    </div>
  );
};

export default LabeledInput;
