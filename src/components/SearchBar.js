import React from "react";
// Styling


const SearchBar = ({setQuery}) => {

  const checkLength = (string) => {
    if (string.length >= 2)
      setQuery(string)
    else setQuery("")
  }

  return (
    <input className="searchBar"
      onChange={(event) => checkLength(event.target.value)} //Cu
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
