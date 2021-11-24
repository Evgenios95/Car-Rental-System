import "./DropDown.css";
import React from "react";
import Parse from "parse"

const DropDown = (props) => {

    let t = props.type;   
    const types = [];

    (async function getData() {
        const CarGroup = Parse.Object.extend(t);
        const query = new Parse.Query(CarGroup);
        // You can also query by using a parameter of an object
        // query.equalTo('objectId', 'xKue915KBG');
        try {
          const results = await query.find();
          for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const n = object.get('name')
            types.push(n);
            console.log(types)
            //console.log(n)          
          }
        } catch (error) {
          console.error("Error while fetching " + t , error);
        }
      }());

      
	}
    (function typeList(types){ 
        types.length > 0 && types.map((type, i) => {
		return (
			<option key={i} value={type}>{type}</option>
		)
    })

      

 return(
  <div>
    <label className="label" htmlFor="dropDown"> {props.labeltext}  </label>
    <select className="drop" id="dropDown">
       {typeList}
     {/* <option value="volvo">Volvo</option>
     <option value="saab">Saab</option>
     <option value="mercedes">Mercedes</option>
     <option value="audi">Audi</option> */}
    </select> 
  </div>

  )
}
export default DropDown;