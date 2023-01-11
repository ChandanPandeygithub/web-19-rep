import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


const initialState ={
    isAuth:false,
    token:"",
    isError:false,
    isLoading:false
}

export function reducer(state=initialState,{type,payload}){

    switch(type){
        case LOGIN_REQUEST:return{...state,isLoading:true};
        case LOGIN_SUCCESS:return{...state,isAuth:true,token:payload,isLoading:false};
        case LOGIN_FAILURE:return{...state,isAuth:false,isError:true,isLoading:false}
        default: return state
    }
}