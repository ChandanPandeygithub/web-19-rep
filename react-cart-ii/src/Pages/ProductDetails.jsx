import { useParams, Link } from "react-router-dom";
import data from "../Sources/data";

export default function ProductDetails() {
  const { id } = useParams();

  const output = data.filter((el) => {
    return el.id === Number(id);
  });

  return (
    <div className="ProductDetails">
    
      {
        <>
          <img src={output[0].image_url} alt={output[0].image_url} />
          <h2>{output[0].brand}</h2>
          <p>${output[0].price}</p>
        </>
      }
      <Link to="/">go back</Link>
    </div>
  );
}
