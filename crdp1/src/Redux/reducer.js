import { GET_FAILURE, GET_REQUEST, GET_SUCCESS, USER_PATCH_FAILURE, USER_PATCH_REQUEST, USER_PATCH_SUCCESS } from "./actionType"

const initialState={
    todos:[],
    isLoading:false,
    isError:false
}
export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case GET_REQUEST:return{...state,isLoading:true};
        case GET_SUCCESS:return{...state,isLoading:false,todos:payload};
        case GET_FAILURE:return{...state,isLoading:false,isError:true};
        case USER_PATCH_REQUEST:return{...state,isLoading:true};
        case USER_PATCH_SUCCESS:return{...state,isLoading:false};
        case USER_PATCH_FAILURE: return{...state,isLoading:false,isError:true}
        default: return state;
    }
}