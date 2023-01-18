// A simple dropdown component that is called from the ProfileImage component.

// todo: basic functionality:
// - forward to the profile page
// - forward to the settings page
// - sign out

import React, { FC } from "react";

const Dropdown: FC = () => {
  return (
    <div className="absolute right-5 top-3 w-48 mt-2 origin-top-right divide-y rounded-xl shadow-lg outline-none">
      <div className="hover:cursor-default px-4 py-3">
        <p className="text-sm text-gray-400">Signed in as</p>
        <p className="text-sm font-medium text-white truncate">Username</p>
      </div>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm duration-200 text-white hover:bg-gray-100 hover:text-gray-900"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm duration-200 text-white hover:bg-gray-100 hover:text-gray-900"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm duration-200 text-white hover:bg-gray-100 hover:text-gray-900"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
