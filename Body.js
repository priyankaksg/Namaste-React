import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConterxt from "../utils/UserConterxt";


//.........useState and useEffect............
const Body=()=>{
  // const [ListofRestaurants, setListofRestaurants]= useState(resList);
    const [ListofRestaurants, setListofRestaurants]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  useEffect(()=>{
    fetchData();
  }, []);
  

  const fetchData=async ()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json();
    console.log(json.data);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //......optional chaining............
     setListofRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  const onlineStatus= useOnlineStatus();
  if(onlineStatus === false) 
    return(
  <h1>Looks like your offline!! Please check your Internet Connection.</h1>
    );

  const {loggedInUser,setUserName}= useContext(UserConterxt);
  

 
  //........conditional rendering.......
    // if(ListofRestaurants.length === 0){
    // // return <h1>Loading....</h1>
    // return <Shimmer />
    // }
//..........turnary operator......
  return ListofRestaurants.length === 0? (
    <Shimmer />
  ):(
    <div className="body">
      <div className="flex">
        <div className="searchbar p-4 m-4">
          <input data-testid="searchInput" type="text" className="border border-solid border-black" value={searchText} onChange={
            (e)=>{ 
              setSearchText(e.target.value);
            }
          }/>
          <button className="px-4 py-1 bg-blue-100 m-4 rounded-lg cursor-pointer" onClick={()=>{
            const filteredRestaurant=ListofRestaurants.filter(
              (res)=>  res.info.name.toLowerCase().includes(searchText.toLowerCase())  
              )
            setFilteredRestaurant(filteredRestaurant);
           
          } 
          }>Search</button>
        </div>
        <div className="searchbar p-4 m-4 flex items-center">
          <button className="px-4 py-1 bg-green-100 rounded-lg cursor-pointer" onClick={()=>{
          const filteredList= ListofRestaurants.filter(
            (res)=> res.info.avgRating > 4
          )
          setFilteredRestaurant(filteredList);
          console.log(filteredList);
        }}>
          Top Rated Restaurants
          </button>
        </div>
         <div className="searchbar p-4 m-4 flex items-center">
         <label>User Name: </label>
          <input type="text" className="border border-solid border-black mx-2" 
          value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}>
         </input >
        </div>

        
        </div>
      <div className="flex flex-wrap">
       {
    //.......looping through the restaurant list.............
        filteredRestaurant.map((restaurant)=>(
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> 
        
        {restaurant.info.avgRating > 4 ? (
            <RestaurantCardPromoted  resData={restaurant} />
        ): (
           <RestaurantCard  resData={restaurant} />
        )
        }
         {/* <RestaurantCard  resData={restaurant} /> */}
        </Link>
        ))
       } 
      </div>
    </div>
  )
 //............Mock data...........
  // return(
  //   <div className="body">
  //     <div className="filter">
  //       <button className="filter-btn" onClick={()=>{
  //         const filteredList= ListofRestaurants.filter(
  //           (res)=> res.card.card.info.avgRating > 4
  //         )
  //         setListofRestaurants(filteredList);
  //       }}>
  //         Top Rated Restaurants</button>
  //       </div>
  //     <div className="res-container">
        
  //      {
  //       //.......looping through the restaurant list.............
  //       ListofRestaurants.map((restaurant)=>(
  //         <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
  //       ))
  //      }
       
  //     </div>
  //   </div>
  // )
}
export default Body;