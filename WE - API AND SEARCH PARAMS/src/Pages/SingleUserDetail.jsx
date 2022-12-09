import { useParams } from "react-router-dom";

function SingleUserDetail() {
  const params = useParams();
  console.log(params);
  return <div>your in singleuser detail</div>;
}
export default SingleUserDetail;
