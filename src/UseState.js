import { useState } from "react";

export default function UseStates(){
  const [num,newnumber ] = useState(0);
  const [input,newInput] = useState('default');


  const increment =()=>{
    newnumber(num+1)
  }
  const onChange =(event)=>{
      const newval = event.target.value;
      newInput(newval);
  }
  return (
    
    <div>
      
     {num}
     <button onClick={increment} ></button>
     <input placeholder="new Input" onChange={onChange}></input>
     {input}
    </div>
)
}