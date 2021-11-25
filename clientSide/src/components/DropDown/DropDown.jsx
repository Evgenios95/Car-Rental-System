import "./DropDown.css";
import React from "react";
import Parse from "parse"

const DropDown = (props) => {

    let t = props.type;
    let a = props.attribute;   
     const types = [];

     (async function getData() {
         console.log("this is t: " + t)
         console.log("this is a: " + a)
        const group = Parse.Object.extend(t);
        const query = new Parse.Query(group);
        // You can also query by using a parameter of an object
        // query.equalTo('objectId', 'xKue915KBG');

        try {
          const results = await query.find();
          for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const element = object.get(a)
            types.push(element);
            //console.log(types)
            //console.log(n)          
          }
        } catch (error) {
          console.error("Error while fetching " + t , error);
        }
        console.log(types)
      }());

      
	
     
    function typeList(types) {
       return  types.forEach(item => <option value={item}>{item}</option>
        )}
    
      

 return(
  <div>
    <label className="label" htmlFor="dropDown"> {props.labeltext}  </label>
    <select className="drop" id="dropDown">
        {typeList()}
       
     {/* <option value="volvo">Volvo</option>
     <option value="saab">Saab</option>
     <option value="mercedes">Mercedes</option>
     <option value="audi">Audi</option> */}
    </select> 
  </div>

  )
}
export default DropDown;