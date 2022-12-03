import React from "react";

function Timer(){
  const[time,setTime]= React.useState(1);
  const ref = React.useRef(null);

  function handleStart(){
    if(ref.current!=null){
        return ;
    }
    ref.current= setInterval(()=>{
        setTime((pretime)=>pretime+1);
     },1000);
  }
  function handlePush(){
    clearInterval(ref.current);
  }
  function handleStop(){
    handlePush();
   ref.current=null;
  }
   function handleReset(){
     handleStop()
     setTime(0);
  }
  useEffect(()=>{
  return  handleStop();
  },[]);
    return(<div>
        <h1>{time}</h1>
        <button onClick={handleStart}>start</button>
        
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
        </div>)
}
export default Timer;
