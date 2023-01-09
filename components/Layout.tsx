import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="container md:my-16 mx-auto">{props.children}</div>
    </>
  );
};

export default Layout;
