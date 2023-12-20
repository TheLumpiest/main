import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { alliance, useSettingsContext } from "./ContextProvider";
import AllianceSwitch from "./AllianceSwitch";

type LinkSignature = {
  text: string;
  to: string;
};

type LinkSignatures = {
  prev: LinkSignature;
  next: LinkSignature;
};

const links: { [key: string]: LinkSignature } = {
  settings: { text: "Settings", to: "settings" },
  pre: { text: "PreMatch", to: "pre" },
  auto: { text: "Autonomous", to: "auto" },
  tele: { text: "Teleop", to: "tele" },
};

function linksFromPathname(pathname: string): LinkSignatures {
  switch (pathname) {
    case "/settings":
      return {
        prev: links.tele,
        next: links.pre,
      };
    case "/":
    case "/pre":
      return {
        prev: links.settings,
        next: links.auto,
      };
    case "/auto":
      return {
        prev: links.pre,
        next: links.tele,
      };
    case "/tele":
      return {
        prev: links.auto,
        next: links.settings,
      };
    default:
      throw Error(
        `NavBar can't generate next/previous links for unknown pathname ${pathname}`
      );
  }
}

export default function NavBar() {
  const { settings, setSettings } = useSettingsContext();
  const location = useLocation();

  const links: LinkSignatures = linksFromPathname(location.pathname);

  return (
    <div
      className={`flex justify-between text-sm md:text-base w-full md:w-auto flex-row grid-1 text-white md:rounded-bl-lg md:rounded-br-lg transition font-sans items-center
      ${settings.Alliance == "Red" ? "bg-red-bg" : "bg-blue-bg"}`}
    >
      <Link
        className="md:hidden bg-black bg-opacity-25 hover:bg-opacity-50 basis-1/6 flex-auto p-2 text-center"
        to={links.prev.to}
      >
        {links.prev.text}
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 hidden md:block px-4 rounded-bl-lg"
        to="/settings"
      >
        Settings
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 hidden md:block px-4"
        to="/pre"
      >
        PreMatch
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 hidden md:block px-4"
        to="/auto"
      >
        Autonomous
      </Link>
      <Link
        className="bg-black bg-opacity-25 hover:bg-opacity-50 py-2 hidden md:block px-4"
        to="/tele"
      >
        Teleop
      </Link>
      <div className="flex-auto flex self-center flex-row bg-black bg-opacity-50 justify-center items-center md:rounded-br-lg md:px-2">
        <div className="flex justify-self-center font-semibold py-2 px-1 md:px-2 text-center">
          Alliance
        </div>
        <AllianceSwitch />
      </div>
      <Link
        className="md:hidden bg-black bg-opacity-25 hover:bg-opacity-50 basis-1/6 flex-auto p-2 text-center"
        to={links.next.to}
      >
        {links.next.text}
      </Link>
    </div>
  );
}
