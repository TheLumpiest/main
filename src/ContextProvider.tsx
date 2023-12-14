import React, { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

export type alliance = "Red" | "Blue";

type ContextState<T> = {
  data: T;
  setData: (data: T) => void;
};

type Settings = {
  Alliance: alliance;
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

// Empty function to initialize as placeholder for contexts
const EF = () => {};

export const SettingsContext = createContext<ContextState<Settings>>({
  data: defSettings,
  setData: () => {},
});
export const PreMatchContext = createContext<ContextState<PreMatch>>({
  data: defPreMatch,
  setData: () => {},
});
export const AutoContext = createContext<ContextState<Auto>>({
  data: defAuto,
  setData: () => {},
});
export const TeleopContext = createContext<ContextState<Teleop>>({
  data: defTeleop,
  setData: () => {},
});

export function ContextProvider(props: PropsWithChildren<{}>) {
  const [settings, setSettings] = useState<Settings>(defSettings);
  const [preMatch, setPreMatch] = useState<PreMatch>(defPreMatch);
  const [auto, setAuto] = useState<Auto>(defAuto);
  const [teleop, setTeleop] = useState<Teleop>(defTeleop);

  const { children } = props;
  return (
    <div>
      <SettingsContext.Provider
        value={{ data: settings, setData: setSettings }}
      >
        <PreMatchContext.Provider
          value={{ data: preMatch, setData: setPreMatch }}
        >
          <AutoContext.Provider value={{ data: auto, setData: setAuto }}>
            <TeleopContext.Provider
              value={{ data: teleop, setData: setTeleop }}
            >
              {children}
            </TeleopContext.Provider>
          </AutoContext.Provider>
        </PreMatchContext.Provider>
      </SettingsContext.Provider>
    </div>
  );
}
