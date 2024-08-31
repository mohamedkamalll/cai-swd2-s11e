import React from "react";

const Card = ({user,del})=>{
     //console.log(user)
     const deleteHndler = () =>{
          console.log(user.id)
          del(user.id)
     }
     return(
     <div style={
               {backgroundColor: "gray" ,
               margin : "20px",
               textAlign:"center"
               }
           }>
          <button 
          style={{backgroundColor: "red",width:"25px",height:"25px",borderRadius:"25px"}} 
          onClick={deleteHndler}
          >x</button>
          <div>Name :{user.name}</div>
          <div>Age :{user.age}</div>
          <div>City :{user.city}</div>
          <div>Edu :{user.edu}</div>

     </div>)
}

export default Card;