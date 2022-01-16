import "../../App.css";
import "./Button.css";

const Button = ({ btnText, className, onClick, type, form }) => {
  return (
    <button
      className={`btn-default ${className}`}
      onClick={onClick}
      type={type || "button"}
      form={form}
    >
      <div>{btnText}</div>
    </button>
  );
};

export default Button;
