import React from "react";
import "./index.scss";

const Search = ({ onChange }) => {
  return (
    <div className="Search">
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Search;
