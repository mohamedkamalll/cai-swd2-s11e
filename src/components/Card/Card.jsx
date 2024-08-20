import React from "react";

const Card = ({user})=>{
     console.log(user)
     return(
     <div style={
               {backgroundColor: "gray" ,
               margin : "20px",
               textAlign:"center"
               }
           }>
          <div>Name :{user.name}</div>
          <div>Age :{user.age}</div>
          <div>City :{user.city}</div>
          <div>Edu :{user.edu}</div>

     </div>)
}

export default Card;