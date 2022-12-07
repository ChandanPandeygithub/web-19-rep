import React from "react";

function Button({text="start",handleClick}){
    return <button onClick={handleClick}>{text}</button>
}

export default Button;