import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCount, increaseCount } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header className="Header">
      <h1>Redux Blog</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
            color: "white",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "white",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="post"
              style={{
                color: "white",
              }}
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              to="user"
              style={{
                color: "#fff",
              }}
            >
              User
            </Link>
          </li>
        </ul>
        <button
          style={{
            padding: "0.5rem 1rem",
            margin: "1rem 0rem",
          }}
          onClick={() => dispatch(increaseCount())}
        >
          {count}
        </button>
      </nav>
    </header>
  );
};

export default Header;
