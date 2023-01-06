import { ADD, REDUCE } from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
const initialState={
    counter:10
}
const reducer = ( state=initialState,{type,payload}) => {

    switch(type){
        case ADD: return{...state,counter:state.counter+payload};
        case REDUCE:return{...state,counter:state.counter-payload}
        default:return state
    }

};

export { reducer };
