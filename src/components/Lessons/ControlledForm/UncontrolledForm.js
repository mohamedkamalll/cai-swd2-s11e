import { useRef } from "react"

const UncontrolledForm = ()=>{
     const city = useRef("")
     
     const inputHandler = (e) =>{
          console.log(e.target.value)
          document.getElementById("p2").innerHTML = e.target.value
     }

     const cityHandler = () =>{
          console.log(city)
     }
     return (

     <div>
          <form>
          <input type="text" id="name" placeholder="Name uncontrolled" onChange={inputHandler}/><br />
          <input type="text" placeholder="city" ref={city} onChange={cityHandler}/><br />
          <input type="submit" />
     </form>
     <p id="p2"></p>
     </div>
)
}

export default UncontrolledForm;