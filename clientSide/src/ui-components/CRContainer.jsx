const CRContainer = (props) => {
  const { className, children } = props;

  return <div className={`cr-container ${className}`}>{children}</div>;
};

export default CRContainer;
