import { useRef, useState } from "react";

const AddUser = (props) =>{
     //Uncontrolled form
     const name = useRef()
     const age = useRef()
     const city = useRef()
     const edu = useRef()

     //controlled form
     const [newUser,setNewUser] = useState({
          name :null,
          age :null,
          city :null,
          edu :null
     })


     const nameHandler = () =>{
          setNewUser({...newUser,name : name.current.value})
                    console.log(newUser)
     }

     const ageHandler = () =>{
          setNewUser({...newUser,age : age.current.value})
                    console.log(newUser)
     }

     const inputHandler = (e) =>{
          console.log(e.target.id)
          setNewUser({...newUser, [e.target.id] : e.target.value})
          console.log(newUser)
     }
     const submitHandler =(e) =>{
          e.preventDefault()
          props.add(newUser)
     }

     return (
          <form onSubmit={submitHandler}>
               <input type="text" placeholder="Enter your name" id="name" ref={name} onChange={nameHandler}/><br />
               <input type="text" placeholder="Enter your age" id="age" ref={age} onChange={ageHandler}/><br />
               <input type="text" placeholder="Enter your city" id="city" ref={city} onChange={inputHandler}/><br />
               <input type="text" placeholder="Enter your edu" id="edu" ref={edu} onChange={inputHandler}/><br />
               <input type="submit"/>
          </form>
     )
}
export default AddUser;