
import {  useState } from 'react';
import './App.css';
import Button from './Componetes/Button';
import Title from './Componetes/Title';
function App() {
   const [count,setCount]= useState(1)
   //function 
  // useEffect(()=>{
  //   // setinterval starts from here
  //  const id=  setInterval(()=>{
  //    if(count<=10){
  //      setCount(count+1);
  //    }else{
  //     clearInterval(id)
  //     setCount(0);
  //    }
  //    },1000)
  //    //setinterval ends here
  // },[]);
    
  const titlechange=()=>{
    document.title= `clicked ${count}`;
    setCount(count+1);
  }

  return (
    <div className="App">

     <Title count={count} ></Title>
     <Button handleClick={titlechange} />
    </div>
  );
}

export default App;
