import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
    </div>
  );
}
