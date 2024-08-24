import React from "react";
import Card from "../Card/Card";

const Cards = ({users,del}) =>{


     //console.log(props)
     return (
          <div >
               {users().map((user)=>{
               return <Card user={user} del = {del}/>
          })}
          </div>
          
     )
}


export default Cards;