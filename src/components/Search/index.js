import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Search = ({ onChange }) => {
  return (
    <div className="Search">
      <input type="text" onChange={onChange} />
      <Link to="/add">Ekle</Link>
    </div>
  );
};

export default Search;
