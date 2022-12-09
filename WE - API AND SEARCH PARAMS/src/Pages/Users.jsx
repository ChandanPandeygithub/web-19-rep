import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import UserDetails from "./UserDetails";

function User() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const getData = async (page) => {
    try {
      let res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setData(res.data.data);
      setTotal(res.data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(total);
  useEffect(() => {
    getData(page);
  }, [page]);
  useEffect(() => {
    setSearchParams({ page });
  }, [page]);
  return (
    <div>
      <div>
        {data.map((item) => (
          <UserDetails key={item.id} {...item} />
        ))}
      </div>
      <div>
        {
          <Pagination
            totalPages={total}
            currentPage={page}
            handelPage={(value) => setPage(value)}
          />
        }
      </div>
    </div>
  );
}
export default User;
