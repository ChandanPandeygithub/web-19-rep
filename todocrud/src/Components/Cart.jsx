
import React from "react";


// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body":
function Cart({name,email,body,handleDelete}){

    return(<div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{body}</p>
        <button onClick={handleDelete}>deletedata</button>
        </div>)
}

export default Cart;