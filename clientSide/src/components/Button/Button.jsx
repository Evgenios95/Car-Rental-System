import "../../App.css";
import "./Button.css";

const Button = (props) => {
  const { btnText, btnColor, btnBgColor, className, onClick, type } = props;

  const defaultColors = {
    background: "#3B3D3D",
    color: "#56d3d3",
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
