import * as React from "react";
import AutonomousForm from "./AutonomousForm";

export default function App() {
  const [formType, setFormType] = React.useState("Autonomous");

  return (
    <div>
      <div className="flex flex-row grid-1">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormType("Autonomous")}>Autonomous</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormType("Teleop")}>Teleop</button>
      </div>
      {formType == "Autonomous" && <AutonomousForm />}

    </div>
  )
}