const CRColumn = (props) => {
  const { className, children } = props;

  return <div className={`cr-column ${className}`}>{children}</div>;
};

export default CRColumn;
