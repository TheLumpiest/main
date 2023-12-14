import * as React from "react";
import AutonomousForm from "./Forms/AutonomousForm";
import TeleopForm from "./Forms/TeleopForm";
import AllianceSwitch from "./AllianceSwitch";

enum Alliance {
  RED,
  BLUE,
}

export default function App() {
  const [formType, setFormType] = React.useState("Autonomous");
  const [alliance, setAlliance] = React.useState(Alliance.RED);

  return (
    <div className="min-h-screen w-screen font-serif">
      <div className='flex flex-row grid-1 ${alliance == Alliance.RED ? "bg-red-400" : "bg-blue-500"}'>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormType("Autonomous")}
        >
          Autonomous
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormType("Teleop")}
        >
          Teleop
        </button>
      </div>
      <div className="flex flex-row bg-gray-600 justify-center items-center ">
        <div className="flex font-semibold text-2x1 text-center p-2">
          Alliance
        </div>
        {/* <AllianceSwitch alliance={alliance} setAlliance={setAlliance} /> */}
      </div>
      {formType == "Autonomous" && <AutonomousForm />}
      {formType == "Teleop" && (
        <TeleopForm alliance={alliance} setAlliance={setAlliance} />
      )}
    </div>
  );
}
