import React, { useState } from "react";
import { Link } from "react-router-dom";
import { alliance, useSettingsContext } from "./ContextProvider";
import AllianceSwitch from "./AllianceSwitch";

export default function NavBar() {
  const { settings, setSettings } = useSettingsContext();

  return (
    <div className="flex flex-row grid-1 text-white rounded-bl rounded-br">
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 px-4 rounded-bl-lg"
        to="/settings"
      >
        Settings
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 px-4"
        to="/pre"
      >
        PreMatch
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 px-4"
        to="/auto"
      >
        Autonomous
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 px-4"
        to="/tele"
      >
        Teleop
      </Link>
      <div className="flex-auto flex flex-row bg-black bg-opacity-50 justify-right items-center rounded-br-lg px-2">
        <div className="flex ml-auto font-semibold text-2x1 p-2 text-center">
          Alliance
        </div>
        <AllianceSwitch />
      </div>
    </div>
  );
}
