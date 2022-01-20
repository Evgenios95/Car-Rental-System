import React from "react";
import "./CheckBox.css";
const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="checkbox-form">
    <label className="checkbox-label">{label}</label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
      className="checkbox-input"
    />
  </div>
);

export default Checkbox;
