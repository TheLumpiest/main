import TeamSelector from "../TeamSelector";
import Chooser from "../Chooser";
import { MouseEvent, useState } from "react";
import AllianceSwitch from "../AllianceSwitch";
import { useSettingsContext } from "../ContextProvider";
import React from "react";
import ScoreCounter from "../ScoreCounter";
import { Position } from "../shared";

type Props = { alliance: number; setAlliance: (alliance: number) => void };

export default function AutonomousForm() {
  const [highScore, setHighScore] = React.useState(0);
  const [lowScore, setLowScore] = React.useState(0);
  const [comments, setComments] = React.useState("");
  const { settings, setSettings } = useSettingsContext();

  const chooserLabels =
    settings.Alliance == "Red"
      ? ["Red 1", "Red 2", "Red 3"]
      : ["Blue 1", "Blue 2", "Blue 3"];

  const [position, setPosition] = useState("1" as Position);

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
        <div className="">
          <div className="font-semibold text-4xl text-center">Autonomous</div>
          <div className="p-4 text-left">
            <TeamSelector />
            <div className="text-3xl pt-4"> Position</div>
            <Chooser
              value={position}
              setValue={setPosition}
              value1={chooserLabels[0]}
              value2={chooserLabels[1]}
              value3={chooserLabels[2]}
              checkedColor={settings.Alliance === "Red" ? "#DC2626" : "#2563EB"}
            />
            <div className="flex flex-row items-start justify-left p-4">
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
            <div className="flex flex-col justify-left p-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black text-left"
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
        </div>

        <div className="flex flex-row items-center justify-center">
          <button
            className="bg-black bg-opacity-25 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
