import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};

const Users = () => {
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);
  const [text, setText] = useState("");
  // const navigate = useNavigate();
  // 2

  useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res);
    });
    // 3. DATA SHOULD BE CHANGED BASIS THE PAGE NUMBER
  }, [page]);

  // const isAuth = true;

  // 3
  useEffect(() => {
    setSearchParams({ page, text });
  }, [page, text]);

  console.log(typeof page);

  return (
    <>
      <h1>Users</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        {data?.data?.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img src={user.avatar} alt="prof-pic" />
            <Link to={`/users/${user.id}`}>More Details</Link>
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button disabled={page >= 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
};

export default Users;
