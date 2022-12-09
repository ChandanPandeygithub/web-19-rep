import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    setCount(count + 1);
  };

  const decreaseValue = () => {
    setCount(count - 1);
  };
 function reset(){
   setCount(0)
 }
  return (
    <div style={{width:"90%",backgroundColor:"black",color:"white",textAlign:"center"}}>
      <span> Count: {count} </span><br/>
      <button onClick={decreaseValue}>-</button>
      <button onClick={increaseValue}>+</button>
      <br/>
      <button onClick={reset}>0</button>
    </div>
  );
}
