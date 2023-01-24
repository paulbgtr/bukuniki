import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

const Layout: FC<Props> = (props) => {
  const { asPath } = useRouter();
  const [rightPath, setRightPath] = useState(false);

  return (
    <>
      {/* Checking if the path is not equal to "/" or "/login" or "/signup" and if
      it is not then it will render the Navbar component. */}
      {asPath !== "/" && asPath !== "/login" && asPath !== "/signup" && (
        <Navbar />
      )}

      <div
        className={`${props.className} ${props.centered &&
          "grid justify-items-center"} container my-12 mx-auto`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
