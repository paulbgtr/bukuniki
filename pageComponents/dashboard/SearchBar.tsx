// todo: basic functionality for search bar
import React, { FC } from "react";

const SearchBar: FC = () => {
  return (
    <input
      placeholder="Search for journals..."
      className="w-full border-2 border-pink-300 focus:outline-none pl-3 rounded-xl py-2"
      type="text"
    />
  );
};

export default SearchBar;
