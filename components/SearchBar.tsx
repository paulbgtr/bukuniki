import React from "react";

const SearchBar = () => {
  return (
    <input
      placeholder="Search for journals..."
      className="w-96 border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
      type="text"
    />
  );
};

export default SearchBar;
