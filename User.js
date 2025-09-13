import {useState} from "react";

const User=(props)=>{
 const [count, setCount]= useState(0);
 const [count1]= useState(1);
 
//  const number2= 2;
//  setCount(number2);
  return(
   
    <div className="user-card p-4 m-4 bg-gray-50 rounded-lg">
      <h1>This is functional component</h1>
      <h3>Name: {props.name}</h3>
      <h4>Location: Hyderabad</h4>
      <h4>Ph no: 8639400294</h4>
      <h4>Count: {count}</h4>
      <button className="px-4 m-2 bg-blue-100 rounded-lg" onClick={()=>{
        const countIncrease= count+1;
        setCount(countIncrease);
        console.log(count);
      }}>Count Increase</button>
       <h4>Count1: {count1}</h4>
    </div>
    
  )
}
export default User;