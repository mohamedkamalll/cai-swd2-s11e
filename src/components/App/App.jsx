import React , {useState} from "react";
import Counter from "../Counter/Counter";
import { CounterWithState } from "../Counter/Counter";
import Cards from "../Cards/Cards";
import AddUser from "../AddUser/AddUser";

const users = [
  { name: "Mohamed", age: 24, city: "cairo", edu: "cs", id: 3 },
  { name: "Mario", age: 19, city: "Alex", edu: "dfvsfsed", id: 4 },
  { name: "Mariam", age: 22, city: "cairo", edu: "IS", id: 1 },
  { name: "Mariam", age: 25, city: "qena", edu: "CS", id: 12 },
  { name: "Nora", age: 20, city: "cairo", edu: "cs", id: 2 },
];

const App = () => {
  const [Users,setUsers] = useState(users)
  const [filterKey,setFilterKey] = useState("")
  const [cars,setCars ] = useState([])

//https://freetestapi.com/api/v1/cars
  fetch("https://freetestapi.com/api/v1/cars").then((data)=> data.json()).then((d)=>setCars(d))

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
