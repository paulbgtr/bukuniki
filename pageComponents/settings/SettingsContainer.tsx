// A container for different kind of settings (e.g. account, app, etc.)

import React from "react";

type Props = {
  header: string;
  children: React.ReactNode;
};

const SettingsContaier = ({ children, header }: Props) => {
  return (
    <div className="p-10 shadow-xl rounded-xl md:w-1/2">
      <h2 className="text-2xl font-bold">{header}</h2> {children}
    </div>
  );
};

export default SettingsContaier;
