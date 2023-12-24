import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
    <div className="flex flex-row items-center justify-between">
      <div className="px-4">{label}</div>
      <button
        className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white shadow-black/20 shadow font-bold w-8 h-8 rounded-full"
        onClick={() => setHighScore(highScore > 0 ? highScore - 1 : 0)}
      >
        <RemoveIcon className="mb-0.5" fontSize="inherit" />
      </button>
      <div className="flex px-4 text-center">
        <p className="w-2">{highScore}</p>
      </div>
      <button
        className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white shadow-black/20 shadow font-bold px-2 py-1 rounded-full"
        onClick={() => setHighScore(highScore + 1)}
      >
        <AddIcon fontSize="inherit" />
      </button>
    </div>
  );
}
