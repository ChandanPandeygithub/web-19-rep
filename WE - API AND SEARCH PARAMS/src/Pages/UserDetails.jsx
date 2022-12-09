import { Link } from "react-router-dom";

function UserDetails({ id, email, avatar, first_name, last_name }) {
  return (
    <div>
      <img src={avatar} alt={first_name} />
      <h3>
        <Link to={`/users/${id}`}>{first_name}</Link>
      </h3>
      <h3>{last_name}</h3>
      <h3>{email}</h3>
    </div>
  );
}
export default UserDetails;
