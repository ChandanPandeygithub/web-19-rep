import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { BookCart } from "../Components/BookCart";


export function SingleTodo(){
    const todos = useSelector(store=>store.todosReducer.todos);
    const [bookData,setBookData] = useState({});
    const  params= useParams();
    const location =useLocation();
    const navigate= useNavigate()
    // const navigate = useNavigate();
    // console.log(navigate({state:location.pathname}),"line 13 navigate")
    useEffect(()=>{
      let book = todos.find((el)=>el.id== +params.id)
      book&&setBookData(book)
      console.log(params,"line 17")
      console.log(location,"line 18 singletodos")
      
    },[])
    return(<div>
        <p>sigle page:{params.id}</p>
        <BookCart book={bookData}/>
        <Link to={`/book/${params.id}/edit`} state={location.pathname} replace>
        <button>edit</button>
        </Link>
        </div>)
}