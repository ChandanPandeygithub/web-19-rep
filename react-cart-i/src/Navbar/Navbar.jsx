import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" style={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",color:"red",backgroundColor:"black"}} >
      <Link to="/">home</Link>
      <Link to="/MensProducts">mens produdc.</Link>
      <Link to="/womenProducts"> womans PRODUCT.</Link>
      <Link to="/login">login please.</Link>
      <Link to="/cartPage">categories</Link>
    </div>
  );
}

export default Navbar;
