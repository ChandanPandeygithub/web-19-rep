
import React from "react";

function getdata(){

    return fetch('http://localhost:3000/posts').then((res)=>res.json());
}

function postdata(data){
    return fetch(`http://localhost:3000/posts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),

    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
}


function putdata(data,id){
    return fetch(`http://localhost:3000/posts/${data.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)

    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
}
function petchdata(data){
    return fetch(`http://localhost:3000/posts/${data.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...data}),

    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
}

function deletedata(id){
    return fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
}



export default getdata;
export{deletedata};
export{petchdata};
export{putdata}
export{postdata};