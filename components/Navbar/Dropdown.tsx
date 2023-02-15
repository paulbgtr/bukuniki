// A simple dropdown component that is called from the ProfileImage component.

// todo: when clicked everywhere except the dropdown, the dropdown should close

// todo: basic functionality:
// - forward to the settings page
// - sign out

import React from "react";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="absolute w-48 mt-2 origin-top-right divide-y shadow-lg outline-none right-5 top-3 rounded-xl">
      <div className="px-4 py-3 hover:cursor-default">
        <p className="text-sm text-gray-400">Signed in as</p>
        <p className="text-sm font-medium text-white truncate">Username</p>
      </div>
      <div className="py-1">
        <Link
          href="/settings"
          className="block px-4 py-2 text-sm text-white duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          Settings
        </Link>
        <Link
          href="/login"
          className="block px-4 py-2 text-sm text-white duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
