import React, { useContext } from "react";
import UserConterxt from "../utils/UserConterxt";

class UserClass extends React.Component{
 
  constructor(props){
    super(props);
     console.log("Child Constructor");
   this.state={
     userInfo: {
      name:"Dummy",
      location:"Hyd",
    },
    // count:0,
    // count1:1,
   
   }
   // const {loggedInUser}= useContext(UserConterxt);
   

  }
  async componentDidMount(){
   
    console.log("Child ComponentDidMount");
    const data= await fetch("https://api.github.com/users/priyankaksg");
    const json= await data.json();
      console.log(json);
    //.........updating state variables.......
   this.setState({
    userInfo:json
   })
console.log(this.state.userInfo.name);
  
  }
  
  render(){
    
     console.log("Child Render");
    const {name,location,avatar_url}= this.state.userInfo;
   // const {count,count1}= this.state
    return(
       
       


      <div className="p-4 m-4 bg-gray-50 rounded-lg">
        <div className="member_list">
          <h1>This is class based component</h1>
          {/* <h2>Logged in user is</h2> */}
          {/* <UserConterxt.Consumer>
           { loggedInUser} 

           </UserConterxt.Consumer>     */}
        <img  className="w-30" src={avatar_url}/>
        <span className="p-4">
          <h3>Name:{name} </h3>
          <h4>Location: {location}</h4>
          <h4>Ph no: 8639400294</h4>
          </span>
          </div>
          {/* <h4>Count: {count}</h4>
          <button onClick={()=>{
            this.setState({
              count: this.state.count+1,
            })
          }

          }>Count Increase</button>
           <h4>Count1: {count1}</h4> */}
         </div>
    )
  }
  
}
export default UserClass;