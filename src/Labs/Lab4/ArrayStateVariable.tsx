import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <Button variant="success" className="mb-3" onClick={addElement}>Add Element</Button>
   <ul>
    {array.map((item, index) => (
     <li key={index} className="border p-1"> {item}
      <Button className="ms-5" variant="danger" onClick={() => deleteElement(index)}>
       Delete</Button>
     </li>))}
   </ul><hr/></div>);}