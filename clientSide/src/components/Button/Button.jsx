import "../../App.css";
import "./Button.css";
import styled from "styled-components";

const Button = (props) => {
  const { btnText, btnColor, btnBgColor, className, onClick, type } = props;

  const Button = styled.button`
    background-color: ${() => btnBgColor || "#3B3D3D"};
  `;

  const ButtonText = styled.div`
    color: ${() => btnColor || "#56d3d3"};
  `;

  return (
    <Button className={`btn-default ${className}`}>
      <ButtonText onClick={onClick}>{btnText}</ButtonText>
    </Button>
  );
};

export default Button;
