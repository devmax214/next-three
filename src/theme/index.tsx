import React, { useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./globalStyles";
import { useSettingsContext } from "@/components/settings";

import { palette } from "./palette";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode } = useSettingsContext();

  const themeOptions = useMemo(() => {
    return {
      palette: palette(themeMode),
      customShadows: customShadows("light"),
      typography,
    };
  }, [themeMode]);

  const theme = createTheme(themeOptions as ThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
