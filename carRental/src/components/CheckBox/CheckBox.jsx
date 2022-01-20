import React from "react";
import "./CheckBox.css";
const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label className="check-label">{label}</label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
      className="form-check-input"
    />
  </div>
);

export default Checkbox;
