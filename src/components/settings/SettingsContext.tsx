import React, { createContext, useContext, useMemo, useState } from "react";
import { SettingsContextProps } from "@/components/settings/types";
import { defaultSettings } from "./config-setting";

const initialState: SettingsContextProps = { ...defaultSettings };

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [themeMode, setThemeMode] = useState(defaultSettings.themeMode);

  const [themeStretch, setThemeStretch] = useState(
    defaultSettings.themeStretch
  );
  const [themeLayout, setThemeLayout] = useState(defaultSettings.themeLayout);

  const memoizedValue = useMemo(() => {
    return { themeStretch, themeLayout, themeMode };
  }, [themeLayout, themeStretch, themeMode]);

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
