import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { editBook,  getData } from "../Redux/action";


export function EditBook(){
    const [title,setTitle]= useState();
    const [auther,setAuther] = useState();
    const navigate = useNavigate()
   const params = useParams();
   const dispatch = useDispatch()
   const location = useLocation();
   console.log(location,"line 13 edit book")
const todos = useSelector(store=>store.todosReducer.todos);
  
   useEffect(()=>{
    const book = todos.find((el)=>el.id=== +params.id);
    if(book){
        setAuther(book.auther);
        setTitle(book.book_name)
    }

},[])
   function handleEdit(){
    let editedData={
        auther,
        book_name:title
    }
    
    dispatch(editBook(params.id,editedData)).then((res)=>{
      navigate(location.state,{replace:true})
      dispatch(getData());
    }).catch(()=>{

    })

   }
    return(<div>
                 <input type={"text"} placeholder={"edit title"} value={title} onChange={(e)=>setTitle(e.target.value)} />
                 <input type={"text"} placeholder={"edit auther"} value={auther} onChange={(e)=>setAuther(e.target.value)} />

                 <button onClick={handleEdit}>edit book</button>
        </div>)
}