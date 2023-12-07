import TeamSelector from "../TeamSelector";
import Chooser from "../Chooser";
import { MouseEvent } from "react";
import AllianceSwitch from "../AllianceSwitch";
import { SettingsContext } from "../ContextProvider";
import React from "react";

const ScoreCounter = ({
  label,
  highScore,
  setHighScore,
}: {
  label: string;
  highScore: number;
  setHighScore: (score: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="px-4">{label}</div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setHighScore(highScore > 0 ? highScore - 1 : 0)}
      >
        -
      </button>
      <div className="px-4">{highScore}</div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setHighScore(highScore + 1)}
      >
        +
      </button>
    </div>
  );
};

type Props = { alliance: number; setAlliance: (alliance: number) => void };

export default function AutonomousForm() {
  const [highScore, setHighScore] = React.useState(0);
  const [lowScore, setLowScore] = React.useState(0);
  const [comments, setComments] = React.useState("");
  const settings = React.useContext(SettingsContext);

  const chooserValues =
    settings.Alliance == "Red"
      ? ["Red 1", "Red 2", "Red 3"]
      : ["Blue 1", "Blue 2", "Blue 3"];

  function handleSubmit(formData: MouseEvent<HTMLFormElement>) {
    formData.preventDefault();
    console.log("Submitted");
  }

  return (
    <div
      className={`min-h-screen w-screen flex flex-col items-center
      ${settings.Alliance == "Red" ? "bg-red-400" : "bg-blue-500"}`}
    >
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="p-4 pt-10">
          <div className="font-semibold text-4xl text-center">Autonomous</div>
          <div className="flex flex-row items-center justify-center"></div>
          <TeamSelector />
          <div className="p-4">
            <div className="text-3xl"> Position</div>
            <Chooser
              value1={chooserValues[0]}
              value2={chooserValues[1]}
              value3={chooserValues[2]}
            />
          </div>
          <div className="flex flex-row items-center justify-center p-4">
            <div className="flex flex-col items-end justify-center gap-2">
              <ScoreCounter
                label="high"
                highScore={highScore}
                setHighScore={setHighScore}
              />
              <ScoreCounter
                label="low"
                highScore={lowScore}
                setHighScore={setLowScore}
              />
            </div>
          </div>

          {/* comments section */}
          <div className="flex flex-col items-center justify-center p-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-black bg-transparent placeholder-black rounded-lg border border-black"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
