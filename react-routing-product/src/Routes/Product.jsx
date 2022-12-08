import { Link } from "react-router-dom";

export default function Product() {
  const data = [
    {
      name: "SmartPhone",
      price: 30,
      id: 0
    },
    {
      name: "Watch",
      price: 20,
      id: 1
    },
    {
      name: "Shirt",
      price: 50,
      id: 2
    },
    {
      name: "Pants",
      price: 100,
      id: 3
    }
  ];

  return (
    <div>
      <h1>Product Page</h1>
      {data.map((elem) => (
        <div key={elem.id}>
          <Link to={`/product/${elem.id}`}>
            `open product NO.{elem.id + 1}`
          </Link>
        </div>
      ))}
    </div>
  );
}
