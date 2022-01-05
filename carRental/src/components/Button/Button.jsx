import "../../App.css";
import "./Button.css";

const Button = ({ btnText, className, onClick, type }) => {
  return (
    <button
      className={`btn-default ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      <div>{btnText}</div>
    </button>
  );
};

export default Button;
