
import React, { useEffect, useState } from "react";
import { postdata } from "../Api/Api";
import { putdata } from "../Api/Api";
import { petchdata } from "../Api/Api";
const initial ={name:"",email:"",body:"",id:1}
function AddCart({handledep}){
     const[data,setData]= React.useState(initial);
    // 
    function handleChange(e){
        const{type, name,value,checked}=e.target;
          console.log(e.target)
        const val = type==="text"?value:type==="number"?value:checked;
        console.log(type,name,val)
        setData({...data,[name]:val});
    }
     function handleSubmit(e){
       e.preventDefault();
       postdata(data);
      //  setDep(!dep)
       handledep()
     }
     function handleput(e){
      e.preventDefault();
      putdata(data)
      // setDep(!dep)
      handledep()

     }

     function handlepatch(e){
      e.preventDefault()
       petchdata(data)
      //  setDep(!dep)
      handledep()
     }

     
    return(<div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="name" name="name" value={data.name} />
        <input type="text" onChange={handleChange} placeholder="email" name="email" value={data.email} />
        <input type="text" onChange={handleChange} placeholder="body" name="body" value={data.body} />
        <input type="checkbox" name="cheacked" checked onChange={handleChange} />
        <input type="submit"/>
        </form>

        <p>put</p>
        <form onSubmit={handleput}>
        <input type="text" onChange={handleChange} placeholder="name" name="name" value={data.name} />
        <input type="text" onChange={handleChange} placeholder="email" name="email" value={data.email} />
        <input type="text" onChange={handleChange} placeholder="body" name="body" value={data.body} />
        <input type="checkbox" name="cheacked" checked onChange={handleChange} />
        <input  type="number" name="id" placeholder="id" value={data.id} onChange={handleChange} />
        <input type="submit"  value="handleput" />
        </form>
        <p>PATCH</p>
       
        <form onSubmit={handlepatch}>
        <input type="text" onChange={handleChange} placeholder="name" name="name" value={data.name} />
       {
        // <input type="text" onChange={handleChange} placeholder="email" name="email" value={data.email} />
        // <input type="text" onChange={handleChange} placeholder="body" name="body" value={data.body} />
        // <input type="checkbox" name="cheacked" checked onChange={handleChange} />
       }
        <input  type="number" name="id" placeholder="id" value={data.id} onChange={handleChange} />
        <input type="submit"  value="handlepatch" />
        </form>

        </div>)
}

export default AddCart;