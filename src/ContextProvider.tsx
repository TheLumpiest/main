import React, { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

export type alliance = "Red" | "Blue";

type Settings = {
  Alliance: alliance;
  Position: String;
  Competition: String;
};

type SettingsState = {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

type PreMatch = {
  Team: String;
  NoShow: boolean;
};

type PreMatchState = {
  preMatch: PreMatch;
  setPreMatch: React.Dispatch<React.SetStateAction<PreMatch>>;
};

type Auto = {
  UpperAuto: number;
  LowerAuto: number;
  Taxi: boolean;
};

type AutoState = {
  auto: Auto;
  setAuto: React.Dispatch<React.SetStateAction<Auto>>;
};

type Teleop = {
  UpperTele: number;
  LowerTele: number;
  EndGame: number | String;
};

type TeleopState = {
  teleop: Teleop;
  setTeleop: React.Dispatch<React.SetStateAction<Teleop>>;
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

const SettingsContext = createContext<SettingsState | null>(null);
const PreMatchContext = createContext<PreMatchState | null>(null);
const AutoContext = createContext<AutoState | null>(null);
const TeleopContext = createContext<TeleopState | null>(null);

export function ContextProvider(props: PropsWithChildren<{}>) {
  const [settings, setSettings] = useState<Settings>(defSettings);
  const [preMatch, setPreMatch] = useState<PreMatch>(defPreMatch);
  const [auto, setAuto] = useState<Auto>(defAuto);
  const [teleop, setTeleop] = useState<Teleop>(defTeleop);

  const { children } = props;
  return (
    <div>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <PreMatchContext.Provider value={{ preMatch, setPreMatch }}>
          <AutoContext.Provider value={{ auto, setAuto }}>
            <TeleopContext.Provider value={{ teleop, setTeleop }}>
              {children}
            </TeleopContext.Provider>
          </AutoContext.Provider>
        </PreMatchContext.Provider>
      </SettingsContext.Provider>
    </div>
  );
}

export function useSettingsContext(): SettingsState {
  const context = useContext(SettingsContext);
  if (!context) {
    throw Error("useSettingsContext must be used within a ContextProvider");
  }

  return context;
}

export function usePreMatchContext(): PreMatchState {
  const context = useContext(PreMatchContext);
  if (!context) {
    throw Error("usePreMatchContext must be used within a ContextProvider");
  }

  return context;
}

export function useAutoContext(): AutoState {
  const context = useContext(AutoContext);
  if (!context) {
    throw Error("useAutoContext must be used within a ContextProvider");
  }

  return context;
}

export function useTeleopContext(): TeleopState {
  const context = useContext(TeleopContext);
  if (!context) {
    throw Error("useTeleopContext must be used within a ContextProvider");
  }

  return context;
}
