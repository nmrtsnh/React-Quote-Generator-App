import React from "react";
import Confetti from "react-confetti";

import "./styles.css";

function MyConfetti() {
  return (
    <div>
      <Confetti numberOfPieces={80} className="w-full h-full" />
    </div>
  );
}

export default MyConfetti;
