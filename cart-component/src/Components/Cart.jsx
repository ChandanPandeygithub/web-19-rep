import React from "react";
import Labble from "./Lable";
import Price from "./Price";
import Quantity from "./Quantitiy";
function Cart({labble,price,quantity, handleQuantity,id}){
       
      function handleInc(){
         handleQuantity(id,1)
         //handleTotle(1,+(price))
      }

      function handledec(){
        handleQuantity(id,-1)
       // handleTotle(-1,+(price));
     }
    return (
        <div style={{border:"2px solid black",borderRadius:"2%",display:"flex",justifyContent:"space-around",alignItems:"center",alignContent:'center',gap:"2%"}}>
        <div style={{border:"2px solid red",display:'flex',justifyContent:'space-evenly',alignItems:"center",alignContent:"center"}}>
       {
        //    <p>labble</p>
       }
        <Labble name={labble} />
        {
            // <p>price</p>
        }
        <p>  -------    </p>
        <Price price={price} />
        </div>
        
        <div style={{border:"2px solid green",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
        {// <button disabled={true}>inc</button>
        }
        <button onClick={handleInc}>+</button>
        <Quantity quantity={quantity} />
        {
            // <button disabled={true}>dec</button>
        }
        <button onClick={handledec}>-</button>
        {
        }
        </div>
        </div>
    )
}
export default Cart;