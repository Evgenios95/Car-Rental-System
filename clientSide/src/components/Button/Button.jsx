import "../../App.css";
import "./Button.css";

const Button = (props) => {
  const { btnText, btnColor, btnBgColor, className, onClick, type } = props;

  const colors = {
    backgroundColor: btnBgColor || "#3B3D3D",
    color: btnColor || "#56d3d3",
  };

  return (
    <button
      className={`btn-default ${className}`}
      type={type}
      onClick={onClick}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <div style={{ color: colors.color }}>{btnText}</div>
    </button>
  );
};

export default Button;
