import TeamSelector from "../TeamSelector";
import Chooser from "../Chooser";
import { MouseEvent } from "react";
import AllianceSwitch from "../AllianceSwitch";
import { useSettingsContext } from "../ContextProvider";
import React from "react";
import { Link } from "react-router-dom";

export default function PreMatchForm() {
  const { settings, setSettings } = useSettingsContext();
  return (
    <div
      className={`min-h-screen w-screen flex flex-col items-center
      ${settings.Alliance == "Red" ? "bg-red-400" : "bg-blue-500"}`}
    >
      <h1>PreMatch Form</h1>
      <Link to="/auto">
        Click here to go to auto form (which actually exists)
      </Link>
    </div>
  );
}
