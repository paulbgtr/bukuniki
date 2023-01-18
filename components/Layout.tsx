import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout: FC<Props> = (props) => {
  const { asPath } = useRouter();

  return (
    <>
      {asPath !== "/" && <Navbar />}
      <div className={`${props.className} container md:my-16 mx-auto`}>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
