import styled from "styled-components";
import "./Button.css";
import '../../App.css';

const CrButton = (props) => {
  const { btnText, btnColor, btnBgColor } = props;

  const Button = styled.button`
    background-color: ${() => btnBgColor || "#3B3D3D"};
  `;

  const ButtonText = styled.div`
    color: ${() => btnColor || '#56d3d3'};
  `;

  const buttonworks = () => {
      console.log('Hey there, I work');
  }

  return (
    // <div className="btn">
      <Button className="cr-btn">
        <ButtonText onClick={buttonworks} className="btn-cr-text">{btnText}</ButtonText>
      </Button>
    // </div>
  );
};

export default CrButton;