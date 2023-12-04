import { alpha, Theme } from "@mui/material/styles";
import { tableCellClasses, tableRowClasses } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

export default function Table(theme: Theme) {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          [`&.${tableRowClasses.selected}`]: {
            backgroundColor: alpha(theme.palette.primary.dark, 0.04),
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.dark, 0.08),
            },
          },
          "&:last-of-type": {
            [`& .${tableCellClasses.root}`]: {
              borderColor: "transparent",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomStyle: "dashed",
          fontFamily: secondaryFont.style.fontFamily,
        },
        head: {
          fontSize: 16,
          fontWeight: 600,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
          // color: theme.palette.text.secondary,
          // fontWeight: theme.typography.fontWeightSemiBold,
          // backgroundColor: theme.palette.background.neutral,
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(1),
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: "small",
        },
        nextIconButtonProps: {
          size: "small",
        },
      },
      styleOverrides: {
        root: {
          width: "100%",
        },
        toolbar: {
          height: 64,
        },
        actions: {
          marginRight: 8,
        },
        select: {
          paddingLeft: 8,
          "&:focus": {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          right: 4,
          width: 16,
          height: 16,
          top: "calc(50% - 8px)",
        },
      },
    },
  };
}
