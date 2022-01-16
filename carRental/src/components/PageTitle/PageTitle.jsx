import GrayContainer from "../Layout/GrayContainer";
import "./PageTitle.css";

const PageTitle = ({ title }) => {
  return (
    <GrayContainer className="title-container">
      <div className="page-title">{title}</div>
    </GrayContainer>
  );
};

export default PageTitle;
