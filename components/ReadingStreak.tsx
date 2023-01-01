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
    <Card
      className="cursor-pointer"
      title="Current Reading Streak"
      textSize="5xl"
    >
      25
    </Card>
  );
};

export default ReadingStreak;
