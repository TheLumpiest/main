import React, { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

type Settings = {
  Alliance: String;
  Position: String;
  Competition: String;
};

type PreMatch = {
  Team: String;
  NoShow: boolean;
};

type Auto = {
  UpperAuto: number;
  LowerAuto: number;
  Taxi: boolean;
};

type Teleop = {
  UpperTele: number;
  LowerTele: number;
  EndGame: number | String;
};

const defAuto = [0, 0, false];
const defTeleop = [0, 0, null];
const defSettings = ["Red", "1", null];
const defPreMatch = [null, false];

const SettingsContext = createContext(defSettings);
const PreMatchContext = createContext(defPreMatch);
const AutoContext = createContext(defAuto);
const TeleopContext = createContext(defTeleop);

export function ContextProvider(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <div>
      <SettingsContext.Provider value={defSettings}>
        <PreMatchContext.Provider value={defPreMatch}>
          <AutoContext.Provider value={defAuto}>
            <TeleopContext.Provider value={defTeleop}>
              {children}
            </TeleopContext.Provider>
          </AutoContext.Provider>
        </PreMatchContext.Provider>
      </SettingsContext.Provider>
    </div>
  );
}
