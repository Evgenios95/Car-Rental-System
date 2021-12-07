import "./UiComponents.css";

const GrayContainer = ({ className, children, id }) => {
  return (
    <div className={`gray-container ${className}`} id={id}>
      {children}
    </div>
  );
};

export default GrayContainer;
