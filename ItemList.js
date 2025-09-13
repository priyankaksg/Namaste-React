import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList =({items})=>{
  //..adding items to cart.....
  const dispatch = useDispatch();
  const handleaddItem=(item)=>{
    dispatch(addItem(item));
    alert("Item added to the cart.")
    // console.log(item);
  }

  //console.log(items);
  return(
    <div>
      {
         items.map((item)=> (
          <div data-testid="foodItems" key={item.card.info.id} className=" m-2 p-1 border-b-2 border-gray-200 text-left 
          flex justify-between">
           
               <div className="font-bold py-1 w-[80%]">
                <ul>
                  <li>⏺️ {item.card.info.name}</li>
                   <li className="px-2">₹ {item.card.info.price/100}</li>
                    {/* <li>★ {item.card.info.ratings.aggregatedRating.rating}</li> */}
                     <li className="text-xs font-medium px-2">
                      {item.card.info.description}
                     </li>
                </ul>
                {/* <span>{item.card.info.name}</span> 
                <span>- ₹ {item.card.info.price/100}</span> */}
              </div>
                 {/* <p className="text-xs">{item.card.info.description}</p> */}
           
            <div className="w-[20%] h-auto">
               <div className="absolute">
                 <button className="bg-black text-white rounded-lg  mx-22 p-1 cursor-pointer"
                 onClick={()=> handleaddItem(item)}>Add +</button>
               </div>
               <img src={CDN_URL+item.card.info.imageId}/>
            </div>
           
          </div>
      ))

      }
     
    </div>

   
  )

}
export default ItemList;