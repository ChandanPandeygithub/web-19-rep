import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export function PrivateRoute({ children }) {
  const { state, handleLogin } = useContext(AuthContext);

  if (!state.auth) {
    return <Navigate to="/login" />;
  }
  return children;
}
