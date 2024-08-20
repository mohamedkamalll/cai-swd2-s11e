import React, { useState } from "react"
const ControlledForm = () =>{
     const [name,setName] = useState("")
     const [city,setCity] = useState("")
     const nameHandler = (e)=>{
          const value = e.target.value;
          console.log(value)
          setName(value)
          console.log(name)
     }
     console.log(name)
     return (
          <div>
               <form>
               <input type="text" id="name" placeholder="Name" value={name} onChange={nameHandler}/><br />
               <input type="text" id="city" placeholder="city" value={city}/><br />
               <input type="submit" />
          </form>
          <p id="p1">{name}</p>
          </div>
     )
}

export default ControlledForm;