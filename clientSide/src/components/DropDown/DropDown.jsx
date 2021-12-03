import "./DropDown.css";
import React, { useEffect, useState } from "react";
import Parse from "parse";

const DropDown = (props) => {
  var { labeltext, type, attribute } = props;
  const [isLoading, setLoading] = useState(true);
  const [elements, setElements] = useState(["nothing"]);

  useEffect(() => {
    (async () => {
      const element = Parse.Object.extend(type);
      const query = new Parse.Query(element);
      const elementArray = [];
      let filteredArray = (array) =>
        array.filter((v, i) => array.indexOf(v) === i);
      try {
        const results = await query.find();
        for (const object of results) {
          const att = object.get(attribute);
          console.log("att: " + att);
          elementArray.push(att);
        }
        if (typeof elementArray[0] == "number") {
          elementArray.sort();
        }
        setElements(filteredArray(elementArray));
      } catch (error) {
        console.error("Error while fetching" + type, error);
      }
      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <label className="label" htmlFor="dropDown">
        {" "}
        {labeltext}{" "}
      </label>
      <select className="drop" id="dropDown">
        {elements.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
