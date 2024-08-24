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
  const addUser = (newUser) =>{
   // Users.push(newUser)
   setUsers([...Users,newUser])
    console.log(Users)
  }
  return (
    <>
      {/*           <Counter />
          <CounterWithState /> */}
      <AddUser add={addUser}/>
      <Cards users={Users} name={"mohamed"} />
    </>
  );
};

export default App;
