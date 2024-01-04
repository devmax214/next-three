export type ThemeModeValue = "light" | "dark";
export type ThemeLayoutValue = "vertical" | "horizontal" | "mini";
export type ThemeStretchValue = boolean;

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeLayout: ThemeLayoutValue;
  themeStretch: ThemeStretchValue;
};

export type SettingsContextProps = SettingsValueProps & {};
