import { reducer as todosReducer} from "./Redux/reducer";
import {reducer as authReducer} from "./Redux/Authentication/reducer";
import{applyMiddleware, combineReducers, legacy_createStore} from "redux";

const rootReducer =combineReducers({authReducer,todosReducer})
  
function myMiddleware(store){
  return function (next){

    return function (action){
        if(typeof action=='function'){
            return action(store.dispatch)
        }
        return next(action)
    }
  }
}
// const myMiddleware =(store)=>(next)=>(action)=>{
//     // store :- store object(getState,dispatch)
//     //next :- dispatch
//     //action :- whatever action component is dispatching
//     if(typeof action==="fundction"){
//         // getTodosdispatch
//         return action(store.dispatch)
//     }
//     return next(action)
// }
  
export const store = legacy_createStore(rootReducer,applyMiddleware(myMiddleware));
