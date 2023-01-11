import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../Redux/action";
import { BookCart } from "./BookCart";

export function BookList() {
  const [searchparams]=useSearchParams()
  const order = searchparams.get("_order")
  let todos = useSelector((store)=>store.todosReducer.todos)
   const dispatch= useDispatch();
   const location = useLocation();
   console.log(location,"line 11 booklist",location.search)
  useEffect(()=>{
    // const parmaobj={
    //   params:{
    //     category:searchparams.getAll("category"),
    //     _order:searchparams.get("_order"),
    //     _sort:searchparams.get("_sort")
    //   }
    // }
    const parmaobj={
      params:{
        category:searchparams.getAll("category"),
        _sort:order&&"release_year",
        _order:order&&order
      }
    }
   dispatch(getData(parmaobj))
  },[location.search])
  console.log(todos,"line 11")
  return (
    <div style={{ padding:"5px",display:"grid",gridTemplateColumns:"repeat(3,auto)",flexDirection:"column",gap:"20px",width:"70%",border:"2px solid gray",margin:"10px"}}>
      
      {todos.length>0&&todos.map((el)=> <Link to={`/book/${el.id}`}> <BookCart key={el.id} book={el}/> </Link> )}
    </div>
  );
}
