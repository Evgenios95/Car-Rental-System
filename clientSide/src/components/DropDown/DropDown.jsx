import "./DropDown.css";
import React from "react";
import { DropDownList } from "../../text/text";

const DropDown = (props) => {

  const { labeltext, type } = props;
  const typeOfDropdown = props.type;
  const itemlist = DropDownList.cargroup;


 return(
  <div>
    <label className="label" htmlFor="dropDown"> {labeltext}  </label>
    <select className="drop" id="dropDown">
    {itemlist.map((item, i) => (
        <option key={i} value={item}>{item}</option>
      ))}
    </select> 
  </div>

  )
}
export default DropDown;