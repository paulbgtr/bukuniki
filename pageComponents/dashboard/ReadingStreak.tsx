import React from "react";
import { FC } from "react";
import { useState } from "react";
import Card from "../../components/Card";
import { useLongPress } from "use-long-press";
import { useRouter } from "next/router";

const ReadingStreak: FC = () => {
  const router = useRouter();

  const bind = useLongPress(() => {
    router.push("/history");
  });

  const [flip, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <button {...bind()} onClick={cardFlip} className="text-left">
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
