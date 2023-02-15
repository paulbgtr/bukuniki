import React from "react";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

const Layout = (props: Props) => {
  const { asPath } = useRouter();

  return (
    <>
      {/* Checking if the path is not equal to "/" or "/login" or "/signup" and if
      it is not then it will render the Navbar component. */}
      {asPath !== "/" && asPath !== "/login" && asPath !== "/signup" && (
        <Navbar />
      )}

      <div
        className={`${props.className} ${props.centered &&
          "grid justify-items-center"} container my-8 mx-auto`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
