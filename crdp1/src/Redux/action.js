import { GET_FAILURE, GET_REQUEST, GET_SUCCESS, USER_PATCH_FAILURE, USER_PATCH_REQUEST, USER_PATCH_SUCCESS } from "./actionType";
import axios from 'axios';
import { EditBook } from "../Components/EditBook";


export function GetRequestAction(){
    return{type:GET_REQUEST};
}
export function GetSuccessAction(payload){
    return{type:GET_SUCCESS,payload};

}
export function GetFailureAction(){
    return{type:GET_FAILURE};
}

export function getData(parmaobj={}){
    
    return function(dispatch){
     dispatch(GetRequestAction());
    axios.get(`http://localhost:800/todos`,parmaobj).then((res)=>{
        console.log(res.data)
        dispatch(GetSuccessAction(res.data))
        
    }).catch((err)=>{
        dispatch(GetFailureAction())
    })
}
}

  export function editBookRequestAction(){
   return{type:USER_PATCH_REQUEST}
  }
  export function editBookSuccessAction(){
    return{type:USER_PATCH_SUCCESS}
  }
 export  function editBookFailureAction(){
    return{type:USER_PATCH_FAILURE}
  }
export  function editBook(id,editData){

       return function (dispatch){
            dispatch(editBookRequestAction())
         return  axios.patch(`http://localhost:800/todos/${id}`,editData).then((res)=>{
            dispatch(editBookSuccessAction())
           }).catch((err)=>{
              dispatch(editBookFailureAction())
           })

       }
}