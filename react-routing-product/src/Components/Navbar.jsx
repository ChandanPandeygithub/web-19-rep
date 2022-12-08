import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  
  {
    to: "/product",
    title: "Product"
  }
];

const basestyle = {
  color: "black",
  textDecoration: "none"
};
const activeStyle = {
  color: "red",
  textDecoration: "none"
};

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {/* <Link to="/"> Home </Link>
           <Link to="/about"> About </Link> */}
      {links.map((item) => (
        // <Link to={item.id} key={item.id}> {item.name} </Link>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : basestyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;
