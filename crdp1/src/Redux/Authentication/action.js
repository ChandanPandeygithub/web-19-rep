import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";


export function LoginRequestAction(){
    return {type:LOGIN_REQUEST};
}

export function LoginSuccessAction(payload){
    return{type:LOGIN_SUCCESS,payload}
}
export function LoginFailureActioin(){
    return{type:LOGIN_FAILURE}
}

export function LoginUser(userData){

    return function(dispatch){
        dispatch(LoginRequestAction())
       return axios.post("https://reqres.in/api/login",userData).then((res)=>{
          dispatch(LoginSuccessAction(res.data.token))
          console.log(res,"then block")
        }).catch((err)=>{
          dispatch(LoginFailureActioin())
          console.log(err,"catch block")
        })
    }
}