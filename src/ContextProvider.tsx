import React, { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

type ContextState<T> = {
  data: T;
  setData: Function;
};

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

const defAuto: Auto = {
  UpperAuto: 0,
  LowerAuto: 0,
  Taxi: false,
};
const defTeleop: Teleop = {
  UpperTele: 0,
  LowerTele: 0,
  EndGame: "",
};
const defSettings: Settings = {
  Alliance: "Red",
  Position: "1",
  Competition: "",
};
const defPreMatch: PreMatch = {
  Team: "",
  NoShow: false,
};

export const SettingsContext = createContext(defSettings);
export const PreMatchContext = createContext(defPreMatch);
export const AutoContext = createContext(defAuto);
export const TeleopContext = createContext(defTeleop);

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
