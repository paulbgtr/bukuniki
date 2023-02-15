// todo: make the component responsive

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";
import profileImage from "../../public/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.jpeg";

const ProfileImage = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <button
      onClick={() => setDropdown(!dropdown)}
      className="relative hidden w-10 h-10 md:block"
    >
      {dropdown ? <Dropdown /> : null}
      <Image
        alt="User Profile image"
        src={profileImage}
        className="border-2 border-pink-300 rounded-full"
      />
    </button>
  );
};

export default ProfileImage;
