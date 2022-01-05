import "../../App.css";
import "./Button.css";

const Button = (props) => {
  const { btnText, btnColor, btnBgColor, className, onClick, type } = props;

  const defaultColors = {
    background: "var(--global-gray24)",
    color: "var(--global-gray89)",
  };

  return (
    <button
      className={`btn-default ${className}`}
      style={{
        backgroundColor: btnBgColor || defaultColors.background,
      }}
      onClick={onClick}
      type={type}
    >
      <div style={{ color: btnColor || defaultColors.color }}>{btnText}</div>
    </button>
  );
};

export default Button;
