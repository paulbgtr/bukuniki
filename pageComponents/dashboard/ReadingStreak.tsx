import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLongPress } from "use-long-press";

import Card from "../../components/Card";

const ReadingStreak = () => {
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
        // todo: add history
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
