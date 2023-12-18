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
    <div className="flex flex-col items-center">
      <h1>Settings Form</h1>
      <AllianceSwitch />
      <h2>This is not implemented yet</h2>
      <h3>
        Whoever is tasked with making forms, please make this form soon
        :))))))))))))))))
      </h3>
      <Link to="/auto">
        Click here to go to auto form (which actually exists)
      </Link>
    </div>
  );
}
