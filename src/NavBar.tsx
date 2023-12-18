import React, { useState } from "react";
import { Link } from "react-router-dom";
import { alliance, useSettingsContext } from "./ContextProvider";
import AllianceSwitch from "./AllianceSwitch";

export default function NavBar() {
  const { settings, setSettings } = useSettingsContext();
  console.log(settings.Alliance);
  return (
    <>
      <div
        className={
          "flex flex-row grid-1 " +
          (settings.Alliance === "Red" ? "bg-red-400" : "bg-blue-500")
        }
      >
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          to="/settings"
        >
          Settings
        </Link>
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          to="/pre"
        >
          PreMatch
        </Link>
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          to="/auto"
        >
          Autonomous
        </Link>
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          to="/tele"
        >
          Teleop
        </Link>
      </div>
      <div className="flex flex-row bg-gray-600 justify-center items-center ">
        <div className="flex font-semibold text-2x1 text-center p-2">
          Alliance
        </div>
        <AllianceSwitch />
      </div>
    </>
  );
}
