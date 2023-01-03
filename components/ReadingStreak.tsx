// todo: flip card onclick to show streak history

import { FC } from "react";
import { useState } from "react";
import Card from "./Card";

const ReadingStreak: FC = () => {
  const [flip, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <Card textSize="7xl" title="Current Reading Streak">
      20
    </Card>
  );
};

export default ReadingStreak;
