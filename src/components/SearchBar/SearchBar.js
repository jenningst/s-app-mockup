import React, { useState, useEffect, useRef } from "react";
import Icon from '../UI/Icon';
import ICONS from '../../constants/sampleIcons';
import "./SearchBar.css";

const SearchBar = () => {
  const node = useRef();

  const [ searchParams, setSearchParams ] = useState("");
  const [ searchActive, setSearchActive ] = useState(false);

  // event handler for search input
  function handleInputChange(e) {
    e.preventDefault();
    setSearchParams(e.target.value);
    // TODO: handle some sort of searching
  };

  // event handler for search show/hide
  function handleClick(e) {
    if (node.current.contains(e.target)) {
      // inside our node
      setSearchActive(true);
      return;
    }
    // outside our node
    setSearchActive(false);
  };

  // add event listener for search input show/hide functionality
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // setup dynamic class for search input
  const searchClass = searchActive ? "search-input active" : "search-input inactive";
  const hideInput = searchActive ? "search" : "hidden";

  return (
    <div ref={node} className={searchClass} onClick={handleClick}>
      <Icon
        icon={ICONS.MAGNIFYINGGLASS}
        iconClass="search-icon"
      />
      <input
        type={hideInput}
        name="searchbar"
        value={searchParams}
        placeholder="Search Course Academy"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;