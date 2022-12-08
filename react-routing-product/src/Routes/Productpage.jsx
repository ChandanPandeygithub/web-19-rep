import { Link, useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product List </h1>
      <h3>product name : {params.name}</h3>
      <h4>product Price : {params.price} </h4>
      <div>
        <Link to="/product"> Go back </Link>
      </div>
    </div>
  );
}

export default ProductPage;
