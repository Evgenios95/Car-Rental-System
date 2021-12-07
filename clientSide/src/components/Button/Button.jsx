import "../../App.css";
import "./Button.css";

const Button = (props) => {
  const { btnText, btnColor, btnBgColor, className, onClick, type } = props;

  return (
    <button
      className={`btn-default ${className}`}
      style={{
        backgroundColor: btnBgColor || "#3B3D3D",
      }}
      onClick={onClick}
    >
      <div style={{ color: btnColor || "#56d3d3" }}>{btnText}</div>
    </button>
  );
};

export default Button;
