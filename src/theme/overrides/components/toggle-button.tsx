import { alpha, Theme } from "@mui/material/styles";
import {
  toggleButtonClasses,
  ToggleButtonProps,
} from "@mui/material/ToggleButton";
import { secondaryFont } from "@/theme/typography";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

export default function ToggleButton(theme: Theme) {
  const rootStyles = (ownerState: ToggleButtonProps) => {
    const defaultStyle = {
      color: "#ffffff",
      fontSize: 13,
      fontFamily: secondaryFont.style.fontFamily,
      fontWeight: 500,
      padding: "3px 10px",
      [`&.${toggleButtonClasses.selected}`]: {
        borderColor: "currentColor",
        boxShadow: "0 0 0 0.5px currentColor",
        backgroundColor: "#292F3D",
        color: "#ffffff",
      },
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        "&:hover": {
          borderColor: alpha(theme.palette[color].main, 0.48),
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          ),
        },
      }),
    }));

    const disabledState = {
      [`&.${toggleButtonClasses.disabled}`]: {
        [`&.${toggleButtonClasses.selected}`]: {
          // color: theme.palette.action.disabled,
          color: "#ffffff",
          backgroundColor: theme.palette.action.selected,
          borderColor: theme.palette.action.disabledBackground,
        },
      },
    };

    return [defaultStyle, ...colorStyle, disabledState];
  };

  return {
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ToggleButtonProps }) =>
          rootStyles(ownerState),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          // borderRadius: theme.shape.borderRadius,
          // backgroundColor: theme.palette.background.paper,
          borderRadius: "15px",
          backgroundColor: "#ACB1B8",
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
        },
        grouped: {
          // margin: 4,
          [`&.${toggleButtonClasses.selected}`]: {
            boxShadow: "none",
          },
          "&:not(:first-of-type), ": {
            // borderRadius: theme.shape.borderRadius,
            borderRadius: "0px 15px 15px 0px",
            borderColor: "transparent",
          },
          "&:not(:last-of-type)": {
            borderRadius: "15px 0px 0px 15px",
            borderColor: "transparent",
          },
        },
      },
    },
  };
}
