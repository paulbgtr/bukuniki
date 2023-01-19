// A container for different kind of settings (e.g. account, app, etc.)

import React, { FC } from "react";

type Props = {
  header: string;
  children: React.ReactNode;
};

const SettingsContaier: FC<Props> = ({ children, header }) => {
  return (
    <div className="rounded-xl shadow-xl p-10 w-1/2">
      <h2 className="font-bold text-2xl">{header}</h2> {children}
    </div>
  );
};

export default SettingsContaier;
