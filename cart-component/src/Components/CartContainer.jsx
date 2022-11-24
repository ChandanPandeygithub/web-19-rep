import React from "react";
  import Cart from "./Cart";
  import getdata, { postdata } from "../Api/api";
function CartContainer(){
    const [data,setData]= React.useState([])
    // const {labble,setLabble}= React.useState("");
    // const {price,setPrice}= React.useState(0);
     const [qty,setQty]= React.useState(1);
    const [totle,setTotle]=React.useState(0);
    // function handleTotle(qty,price){
    //     const value = +(qty*price)
    //   setTotle(totle+value);
    // }
    
   async function fetchandupdate(){
    try{
    const res = await getdata();
    setData(res)
    tot(res)
    console.log('line 19',res)
    console.log(res)
    }catch(err){
      console.log(err)
    }
   }
   function tot(tdata){
    tdata.forEach(({price,quantity})=>{ setTotle(totle+(price*quantity))});
    console.log(totle,"line 27")
   }
  //  function fetchandupdateandtot(){
  //   fetchandupdate();
  //   tot();
  //  }
    function handleClick(id,value){
        setQty(qty+value);
        postdata(id,qty+value);
        fetchandupdate();
        
    }
    console.log(data,"line 39")
    return(<div>
      <button onClick={fetchandupdate} >click me to get data</button>
      <p>CartContainer</p>
        { 
             data.map(({labble,price,quantity,id})=><Cart key={id} id={id} labble={labble} price={price} quantity={quantity}  handleQuantity={handleClick}  />)
        }
         <div>
         <p>totle price</p>
          {totle}
         </div>
        </div>)
}

export default CartContainer;