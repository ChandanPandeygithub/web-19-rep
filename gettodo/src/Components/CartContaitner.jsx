import React, { useEffect } from "react";
import Cart from "./Cart";
import getdata from "../Api/Api";
function CartContainer(){
  const [data,setData]= React.useState([]);
  const [loading,setLoading]= React.useState(false);
  const [error,setError]= React.useState(false);
 const fetchandupdate= async()=>{
    try{
        setLoading(!loading);
    const res = await getdata();
    setData(res);
      setLoading(false);
    }catch(err){
       setError(true);
    }
 }
     useEffect(()=>{fetchandupdate()},[]);
     if(error){
      return(<div>
         <h1>error</h1>
         </div>)
     }
     if(loading){
      return(<div>
         <h1>loading</h1>
         </div>)
     }
    return(<div>
        <Cart/>
        {data.map(({name,email,body})=><Cart name={name} email={email} body={body}/>)}
        </div>)
}

export default CartContainer;