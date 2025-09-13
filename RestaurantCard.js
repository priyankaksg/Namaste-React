import { CDN_URL } from "../utils/constants";

const StyleCard={
  backgroundColor:"#f0f0f0"
}
//style={StyleCard}

const RestaurantCard= (props)=>{
  //console.log(props)
    const {resData}= props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla
    }= resData.info
  // } =resData.card.card.info
  return(
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg h-50 w-[100%]" alt="res-logo"
      src={CDN_URL+ cloudinaryImageId} />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5>{avgRating}stars</h5>
      <h5>{sla.deliveryTime}min</h5>
      <h5 className="break-all">{cuisines.join(",")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  )
}

// Higher order component......
// input is RestaurantCard and output is RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
         <label className="absolute bg-black text-white rounded-lg mx-2 p-1">Promoted</label>
         <RestaurantCard  {...props}/>
      </div>
    )
  }

}

export default RestaurantCard