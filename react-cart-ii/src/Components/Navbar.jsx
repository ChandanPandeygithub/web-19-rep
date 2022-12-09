import { NavLink } from "react-router-dom";
export default function Navbar() {
  const data = [{ name: "cart produdcts", path: "/" }];
  return (
    <div className="Navbar" style={{backgroundColor:"yellow",borderBottom:"5px solid pink",margin:"auto",width:"50%",height:'40px'}}>
      {data.map((el) => {
        return (
          <NavLink
            key={el.path}
            to={el.path}
            style={({ isActive }) => {
              return isActive ? { color: "green" } : { color: "red" };
            }}
          >
            {el.name}
          </NavLink>
        );
      })}
    </div>
  );
}
