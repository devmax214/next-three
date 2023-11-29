import { Theme } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";

export default function Breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
        li: {
          display: "inline-flex",
          margin: theme.spacing(0.25, 0),
          "& > *": {
            ...theme.typography.body2,
            fontFamily: secondaryFont.style.fontFamily,
          },
        },
      },
    },
  };
}
