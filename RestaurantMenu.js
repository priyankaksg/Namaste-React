
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
//import {useRestaurantMenu} from "../utils/useRestaurantMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

//const [resInfo, setResInfo]= useState(null);
const [showIndex, setShowIndex]= useState(null)
const {resId}= useParams();
// useEffect(()=>{
//   fetchMenu();
// },[]);
// const fetchMenu= async()=>{
//   const data= await fetch(Menu_API + resId);
//   const json= await data.json();
//  console.log(json);
//   setResInfo(json.data)  
//   //  console.log(resInfo.cards[2].card.card.info.name)
//   //  console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)
// }

//..........creating custom hook............
const resInfo= useRestaurantMenu(resId);
console.log(resInfo);

if(resInfo === null) return <Shimmer />
 const {name,city, avgRating, cuisines, costForTwoMessage}= resInfo.cards[2].card.card.info
 const {itemCards,title}= resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card

const categories= resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c)=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
console.log(categories);

 
 return(
    <div className="p-4 text-center">
    <h1 className="text-xl font-bold text-red-600 p-2">{name}  </h1>
    <p className="text-lg font-bold">{city}_ {avgRating} stars</p>
    <p className="text-lg font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>
    {
      categories.map((category, index)=>(
          <RestaurantCategory key={category.card.card.categoryId} data={category?.card?.card} showItems={index === showIndex ? true : false} 
          setShowIndex={()=> setShowIndex(index)} />
      ))
    }
   
     
      {/* <h2 className="text-lg font-bold text-red-500 my-4">Menu</h2>
      <h3 className="font-bold">{title}</h3>
      <ul>
        {itemCards.map((item)=> (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}
          </li>
        ) 
        )}
      </ul> */}

      
    </div>
    
  )
}
export default RestaurantMenu;