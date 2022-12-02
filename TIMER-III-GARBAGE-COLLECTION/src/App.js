import React, { useEffect, useState } from "react"
import './App.css';
function App() {

   const [timer,setTimer]= useState(1);
   const[show,setShow]= useState(true)
  useEffect(()=>{
const id=  setInterval(()=>{
      console.log(timer)
      setTimer((pretime)=>{
        if(pretime>10){
  clearInterval(id)
          return 0;
        }else{
          return pretime+1;
        }
      });
      console.log(timer);
   },2000);
        const cleanup=()=>{
          clearInterval(id)
        }

        return cleanup;
  },[]);
    
  return (
    
    <div className="App">
    {show&&<h1>{timer}</h1>}
      <button onClick={()=>{setShow(false)}}> click me</button>
    </div>
  );
}

export default App;
