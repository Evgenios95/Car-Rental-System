const BookingOverviewTable = ({ children }) => {
  return (
    <div className="overview-container">
      <table>{children}</table>
    </div>
  );
};

export default BookingOverviewTable;
