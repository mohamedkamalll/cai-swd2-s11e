import React, { useState } from 'react'
import Data from './Data'
const Counter = () => {

     let counterValue = 0
     const incrementHandler = () =>{
          counterValue++
          document.getElementById("p1").innerHTML = counterValue;
          document.getElementById("p2").innerHTML = counterValue;
          document.getElementById("p3").innerHTML = counterValue;


     }
     return (
          <div>

               <button onClick={() => incrementHandler() }>+</button>
               <Data d = {counterValue} id = {"p1"}/>
               <Data d = {counterValue} id= {"p2"}/>
               <Data d = {counterValue} id= {"p3"}/>

          </div>
     )
}

export const CounterWithState = () => {
     const [counterValue,setcounterValue] = useState(0);
     const [isDark,setIsDark] = useState(false)

     const incrementHandler = () =>{
          setcounterValue(counterValue + 1)
     }

     const modeHandler =() =>{
          setIsDark(!isDark)
     }

     return (
          <div style={{color:"red" , width:"250px" ,backgroundColor : isDark ? "gray" : "white"}}>
               <button onClick={modeHandler}>Switch</button>
               <button onClick={() => incrementHandler() }>+</button>
               <Data d = {counterValue} />
               <Data d = {counterValue} />
          </div>
     )
}

export default Counter;