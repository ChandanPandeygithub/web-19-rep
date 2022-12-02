import React, { useEffect, useState } from "react"
import './App.css';
function App() {

   const [timer,setTimer]= useState(1);
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
     
  },[]);
    
  return (
    
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
