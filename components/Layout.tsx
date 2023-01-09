import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className={`${props.className} container md:my-16 mx-auto`}>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
