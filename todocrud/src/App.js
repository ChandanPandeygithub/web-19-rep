
import './App.css';
import React from 'react';
import CartContainer from './Components/CartContaitner';
import AddCart from './Components/AddCart';
function App() {
  const[call,setCall]= React.useState(false)
   function handledep(){
    setCall(!call);
   }
  return (
    <div className="App">
    <AddCart handledep={handledep}/>
    {
     <CartContainer dep={call}/>
    } 
      
    </div>
  );
}

export default App;
