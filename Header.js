import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConterxt from "../utils/UserConterxt";
import { useSelector } from "react-redux";


const Header=() =>{
const [btnName, setbtnName]= useState("Login");
const onlineStatus=useOnlineStatus();

const {loggedInUser}= useContext(UserConterxt);
console.log(loggedInUser);

// subscribing the store using selector(reading data from store)
const cartItems = useSelector((store)=> store.cart.items)
console.log(cartItems);

  return(
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL}  />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-bold"><Link to="/">Home</Link></li>
          <li className="px-4 font-bold"><Link to="/about">About Us</Link></li>
          <li className="px-4 font-bold"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold"><Link to="/grocery">Grocery</Link></li>
          {/* <li className="image-li">
            <img className="cart-logo" src="https://www.shutterstock.com/image-vector/fast-shop-logo-design-template-600nw-1900997731.jpg" />
          </li> */}
           <li className="px-4 font-bold">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
           </li>
           <li>
            <button className="text-red-500 cursor-pointer bg-gray-100 font-bold" onClick={
              ()=>{
                return btnName == "Login"? setbtnName("Logout"): setbtnName("Login")              
              }
                    
            }>{btnName}</button>
           </li>
            <li className="px-4 font-bold">{loggedInUser}</li>
         
        </ul>
      </div>
    </div>
  )
}
export default Header;