
import './App.css';
import getdata from './Component/api/api';
import Items from './Component/Items';
import React from 'react';
function App() {
   const [data, setData]= React.useState([]);
   async function fetchandupdate(){
      
    const res = await getdata();
    setData(res)
  }
  return (
    <div className="App">
      { data.map(({title,body})=><Items title={title} body={body}/>)  }
      <button onClick={fetchandupdate}>click me</button>
    </div>
  );
}

export default App;
