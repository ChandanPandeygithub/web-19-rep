import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { status } = useContext(AuthContext);
  if (status === false) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;
