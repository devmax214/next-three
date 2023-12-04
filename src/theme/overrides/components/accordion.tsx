import { Theme } from "@mui/material/styles";
import { typographyClasses } from "@mui/material/Typography";
import { accordionClasses } from "@mui/material/Accordion";
import { accordionSummaryClasses } from "@mui/material/AccordionSummary";

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          [`&.${accordionClasses.expanded}`]: {
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            // backgroundColor: theme.palette.background.paper,
            backgroundColor: "#EDE9DC99",
          },
          [`&.${accordionClasses.disabled}`]: {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          [`&.${accordionSummaryClasses.disabled}`]: {
            opacity: 1,
            color: theme.palette.action.disabled,
            [`& .${typographyClasses.root}`]: {
              color: "inherit",
            },
          },
        },
        expandIconWrapper: {
          color: "inherit",
        },
      },
    },
  };
}
