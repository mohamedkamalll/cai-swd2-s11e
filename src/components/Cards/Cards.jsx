import React from "react";
import Card from "../Card/Card";

const Cards = ({users}) =>{
     //console.log(props)
     return (
          <div >
               {users.map((user)=>{
               return <Card user={user} />
          })}
          </div>
          
     )
}


export default Cards;