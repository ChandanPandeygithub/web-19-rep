import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Status({status}){
const {Auth} = useContext(AuthContext)
    return <h1> token : {status}</h1>
}

export default Status;