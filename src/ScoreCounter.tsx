import React from "react";

export default function ScoreCounter({
  label,
  highScore,
  setHighScore,
}: {
  label: string;
  highScore: number;
  setHighScore: (score: number) => void;
}) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="px-4">{label}</div>
      <button
        className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white shadow-black/20 shadow-inner font-bold py-2 px-4 rounded"
        onClick={() => setHighScore(highScore > 0 ? highScore - 1 : 0)}
      >
        -
      </button>
      <div className="px-4">{highScore}</div>
      <button
        className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white shadow-black/20 shadow-inner font-bold py-2 px-4 rounded"
        onClick={() => setHighScore(highScore + 1)}
      >
        +
      </button>
    </div>
  );
}
