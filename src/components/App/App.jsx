import React , {useState,useEffect} from "react";
import Counter from "../Counter/Counter";
import { CounterWithState } from "../Counter/Counter";
import Cards from "../Cards/Cards";
import AddUser from "../AddUser/AddUser";



const App = () => {
  const [Users,setUsers] = useState(users)
  const [filterKey,setFilterKey] = useState("")
  const [cars,setCars ] = useState([])

//https://freetestapi.com/api/v1/cars
  useEffect(() => {
    try {
      fetch("https://freetestapi.com/api/v1/cars")
      .then(res => res.json())
      .then(data => {
        setCars(data)
        console.log(data)
      })
    }catch(e){
      console.log(e)
    }
  }, []);
  // .then((data)=> data.json())
  // .then((d)=>setCars(d))

  const addUser = (newUser) =>{
   // Users.push(newUser)
   setUsers([...Users,newUser])
    console.log(Users)
  }

  const deleteHandler = (id) =>{
    const users2 = Users
    setUsers(users2.filter((user)=>{
      return user.id != id
    }))
  }

/* const filterHandler = (e) =>{
  console.log(e.target.value)
  setUsers(Users.filter((user)=>{
    user.name == e.target.value
  }))
} */

  const dataHandler = () =>{
    if(filterKey.length > 0){
      return Users.filter((user)=>{
        return user.name.includes(filterKey)
      })
    }
    return Users
  }
  return (
    <>
      {/*           <Counter />
          <CounterWithState /> */}
          <input type="text" placeholder="Filter" onChange={(e)=>{setFilterKey(e.target.value)}}/>
      <Cards users={dataHandler} name={"mohamed"} del = {deleteHandler}/>
      <AddUser add={addUser}/>
    </>
  );
};

export default App;
