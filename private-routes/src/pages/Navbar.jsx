import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",alignContent:"center",backgroundColor:"black",textAlign:"center",fontSize:"24px"}}>
      <Link style={{ padding: "1rem" }} to="/">
       go to Home
      </Link>
      <Link style={{ padding: "1rem" }} to="/dashboard">
      to to  Dashboard
      </Link>
      <Link style={{ padding: "1rem" }} to="/login">
      to go   Login
      </Link>
      {/* <Link style={{ padding: "1rem" }} to="/setting">
        Setting
      </Link> */}
    </div>
  );
};
