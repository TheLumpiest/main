//create the default function for a form
import TeamSelector from "../TeamSelector";
import Chooser from "../Chooser";
import { MouseEvent } from "react";
import AllianceSwitch from "../AllianceSwitch";
import React from "react";
import { useSettingsContext } from "../ContextProvider";

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

export default function TeleopForm() {
  const [highScore, setHighScore] = React.useState(0);
  const [lowScore, setLowScore] = React.useState(0);
  const [comments, setComments] = React.useState("");

  const { settings } = useSettingsContext();

  function handleSubmit(formData: MouseEvent<HTMLFormElement>) {
    formData.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="p-4 pt-10">
          <div className="font-semibold text-4xl text-center">Teleop</div>
          <div className="flex flex-row items-center justify-center"></div>
        </div>
        <div className="p-4">
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
