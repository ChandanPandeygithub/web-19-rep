import data from "../Sources/data";
import { Link } from "react-router-dom";
export default function AllProducts() {
  return (
    <div className="AllProducts">
      
      <div className="Products">
        {data.map((el) => {
          return (
            <Link key={el.id} to={`/details/${el.id}`}>
              <img src={el.image_url} alt={el.image_url} />
              <h2>{el.brand}</h2>
              <p>${el.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
