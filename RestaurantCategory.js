import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data, showItems,setShowIndex})=>{
 // console.log(data);
//const [showItems,setShowItems]= useState(false);

 const handleClick=()=>{
  console.log("showItems"+showItems );
  setShowIndex();
 // setShowItems(!showItems);
 }
  //......Accordians......
  return (
    <div>
   {/**Header */}
   <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
   <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-m">{data.title} ({data.itemCards.length})</span>
     <span>⬇️</span>
   </div>
    {showItems && <ItemList items={data.itemCards}/>}
   </div>
  </div>
  )
}
export default RestaurantCategory;