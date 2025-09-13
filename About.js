import UserConterxt from "../utils/UserConterxt";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

//........we can use React.Component also that time we import React
class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }
  render(){
    console.log("Parent Render");
    return(
       <div>
          <h1 className="text-xl text-red-500 font-bold p-4">About Us</h1>
          <h2 className="font-bold px-4">This is about Team Members.</h2>
          <div className="px-4">
            Logged In User is
            <UserConterxt.Consumer>
              {
                ({loggedInUser})=>(
                  <h1 className="font-bold text-l">{loggedInUser}</h1>
                )
              }
            </UserConterxt.Consumer>
          </div>
            <User name={"priyanka(functional)"}/>
            <UserClass name={"priyanka(class)"} location={"Hyderabad"} />
          </div>
    )
  }

}

// const About=()=>{
//   return(
//     <div>
//       <h1>About Us</h1>
//       <h2>This is about Team Members.</h2>
//       <User name={"priyanka(functional)"}/>
//       <UserClass name={"priyanka(class)"} location={"Hyderabad"} />
//     </div>
//   )
// }
export default About;