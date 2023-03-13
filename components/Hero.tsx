import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Hero = ({ children }: Props) => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        {/* todo: add image
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};
