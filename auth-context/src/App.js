
import './App.css';
import Status from './Component/Status';
import Button from './Component/Button';
import { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
function getdata(data){
  return fetch(`https://reqres.in/api/login`,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
  }).then((res)=>res.json());
}
function App() {
  const[post,setPost] = useState({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
});
  const {Auth,login,logout} = useContext(AuthContext)
  async function fetchdata(data){
    try{
      console.log(Auth,"line 24");
      const res = await getdata(data);
      console.log(Auth,"line 30")
      console.log(res)
      console.log(Auth,"line 29")
      login({...Auth,text:"logut",status:res.token,isAuth:true})

    }catch(err){
      
      login({...Auth,status:err.error})
      
    }

  }
     function handlelogin(post){
      fetchdata(post)
     }
     function handleLogout(){
      logout({isAuth:false,text:"login",status:"tokennotfound"})
     }
  return (
    <div className="App">
      <Status status={Auth.status}/>
      <Button text={Auth.text} handleClick={Auth.isAuth?()=>handleLogout():()=>handlelogin(post)} />
    </div>
  );
}

export default App;
