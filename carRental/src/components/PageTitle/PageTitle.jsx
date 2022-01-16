import GrayContainer from "../Layout/GrayContainer";
import "./PageTitle.css";

const PageTitle = (props) => {
  return (
    <GrayContainer className="title-container">
      <div className="page-title">{props.ptitle}</div>
    </GrayContainer>
  );
};

export default PageTitle;
