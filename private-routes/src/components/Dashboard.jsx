import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  // const nav = useNavigate()
  return (
    <div>
      <h1> your in  dashboard</h1>
      <Link to="/setting"> go to Setting</Link>
    </div>
  );
};
