import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  return (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        ".mobile-menu .MuiModal-backdrop": {
          opacity: "0 !important"
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#__next": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        "input.showspin": {
          MozAppearance: "textfield",
          "&::-webkit-outer-spin-button": {
            margin: 0,
            opacity: 1,
            WebkitAppearance: "auto",
          },
          "&::-webkit-inner-spin-button": {
            margin: 0,
            opacity: 1,
            WebkitAppearance: "auto",
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );
}
