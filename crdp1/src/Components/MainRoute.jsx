

import { Route,Routes } from "react-router-dom";
import { Book } from "../Pages/Book";
import { Login } from "../Pages/Login";
import { SingleTodo } from "../Pages/SingleTodo";
import { EditBook } from "./EditBook";
import { PrivateRoute } from "./PrivateRoute";

export function MainRoute(){

    return(<div>
        <Routes>
        <Route path="/" element={<Book/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/book/:id' element={<PrivateRoute><SingleTodo/></PrivateRoute>}/>
        <Route path="/book/:id/edit" element={ <PrivateRoute><EditBook/></PrivateRoute>}/>

        </Routes>
        </div>);
}