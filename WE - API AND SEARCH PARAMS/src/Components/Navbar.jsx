import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",alignContent:"center",backgroundColor:"black",textAlign:"center",fontSize:"24px"}}>
      <Link to="/">Welcome to the </Link>
      <Link to="/dashboard">go to Dashboard</Link>
      <Link to="/login">  go to Login</Link>
      <Link to="/settings"> go to  Settings</Link>
      <Link to="/users"> go  to Users page</Link>
    </div>
  );
}
export default Navbar;
