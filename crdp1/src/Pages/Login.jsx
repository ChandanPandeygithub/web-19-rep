import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Authentication/action";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loacation= useLocation();
  const [email, setEmail] = useState("");
  const [password, setPossword] = useState("");
  function handleClick() {
    dispatch(LoginUser({ email, password })).then(()=>{
      navigate(loacation.state,{replace:true})
    }).catch(()=>{});
    setEmail("");
    setPossword("");
  }
  return (
    <div>
      <input
        type={"text"}
        placeholder={"enter email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={"text"}
        placeholder={"enter password"}
        value={password}
        onChange={(e) => {
          setPossword(e.target.value);
        }}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
}
