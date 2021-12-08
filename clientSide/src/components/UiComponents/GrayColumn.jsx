import "./UiComponents.css";

const GrayColumn = ({ className, children, id }) => {
  return (
    <div className={`gray-column ${className}`} id={id}>
      {children}
    </div>
  );
};

export default GrayColumn;
