import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [index, setIndex] = useState(1);
  const handleIndex = (i) => [setIndex(i)];

  return (
    <ul>
      <Link to="/">
        <li
          className={index === 1 ? "tab hist active" : "tab hist"}
          onClick={() => handleIndex(1)}
        >
          History
        </li>
      </Link>
      <Link to="/vision">
        <li
          className={index === 2 ? "tab active" : "tab"}
          onClick={() => handleIndex(2)}
        >
          Vision
        </li>
      </Link>
      <Link to="/goals">
        <li
          className={index === 3 ? "tab goal active" : "tab goal"}
          onClick={() => handleIndex(3)}
        >
          Goals
        </li>
      </Link>
    </ul>
  );
};
export default Navbar;
