
import React from "react";

function getdata(){

    return fetch('https://jsonplaceholder.typicode.com/comments?_page=page&_limit=2').then((res)=>res.json());
}



export default getdata;

