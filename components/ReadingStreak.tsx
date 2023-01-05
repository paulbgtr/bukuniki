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
    <button onClick={() => cardFlip()} className="text-left">
      {flip ? (
        <Card id="streak" textSize="7xl" title="Current Reading Streak">
          History
        </Card>
      ) : (
        <Card id="streak" textSize="7xl" title="Current Reading Streak">
          20
        </Card>
      )}
    </button>
  );
};

export default ReadingStreak;
