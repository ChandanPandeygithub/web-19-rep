import React, { useEffect } from "react";
import Cart from "./Cart";
import getdata from "../Api/Api";
import { deletedata } from "../Api/Api";
function CartContainer({call}){
  const [data,setData]= React.useState([]);
  const [loading,setLoading]= React.useState(false);
  const [error,setError]= React.useState(false);
  const[dep,setDep]= React.useState(false);
  function handleDep(){
    setDep(!dep)
  }
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

   function handleDelete(id){
     deletedata(id)
   }
     useEffect(()=>{fetchandupdate()},[dep,call]);
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
        
        {data.map(({name,email,body,id})=><Cart name={name} email={email} body={body} handleDelete={()=>{handleDelete(id);handleDep()} }/>)}
        </div>)
}

export default CartContainer;