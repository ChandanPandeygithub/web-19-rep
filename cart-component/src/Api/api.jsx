
function getdata(){

    return fetch('http://localhost:3000/posts').then((res)=>res.json());
}

function postdata(id,quantitity){
  console.log(id,quantitity);
  return( fetch(`http://localhost:3000/posts/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
 body: JSON.stringify({quantity:quantitity}) 
  }).then((res)=>res.json));
};
export {postdata};
export default getdata;