const CRCard = (props) => {
  const { className, children } = props;

  return <div className={`cr-card-${className}`}>{children}</div>;
};

export default CRCard;

//to be added in css
//bradius: ?px, bgcolor, padding: around 15px
