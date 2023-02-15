// todo: basic functionality for search bar
import React from "react";

const SearchBar = () => {
  return (
    <input
      placeholder="Search for journals..."
      className="w-full py-2 pl-3 border-2 border-pink-300 focus:outline-none rounded-xl"
      type="text"
    />
  );
};

export default SearchBar;
