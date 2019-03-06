import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [ searchParams, setSearchParams ] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setSearchParams(e.target.value);
    // TODO: handle some sort of searching
  }

  return (
    <div>
      <input
        type="search"
        name="searchbar"
        value={searchParams}
        placeholder="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;