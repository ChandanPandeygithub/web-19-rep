import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { status, handelClick } = useContext(AuthContext);
  // console.log(status,handelClick)
  if (status === true) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <button onClick={handelClick}>Login</button>
    </div>
  );
}
export default Login;
