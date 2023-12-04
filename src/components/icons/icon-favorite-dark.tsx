import { memo } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export const StyledBox = styled(Box)<{
  active?: boolean;
}>(({ theme, active }) => ({
  "& #inactive": {
    display: "block",
  },
  "& #active": { display: "none" },
  "&:hover": {
    "& #inactive": {
      display: "none",
    },
    "& #active": { display: "block" },
  },
  ...(active && {
    "& #inactive": {
      display: "none",
    },
    "& #active": { display: "block" },
  }),
}));

function FavoriteDarkIcon({
  active,
  ...other
}: {
  active?: boolean;
} & BoxProps) {
  return (
    <StyledBox
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 22 19"
      xmlns="http://www.w3.org/2000/svg"
      active={active}
      {...other}
    >
      <g id="inactive" clipPath="url(#clip0_3179_1084)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2 17.7C11 18 10.6 18 10.3 17.8C10.3 17.8 10.2 17.8 10.2 17.7C8.19999 15.3 6.39999 13.6 4.89999 12.2C2.39999 9.8 0.799988 8.2 0.799988 5.7C0.799988 3 2.99999 0.800003 5.79999 0.800003C7.79999 0.800003 9.19999 2.1 10.1 3.3C10.4 3.8 10.7 4.2 10.8 4.5C11 4.1 11.3 3.7 11.5 3.3C12.4 2.1 13.8 0.800003 15.8 0.800003C18.6 0.800003 20.8 3 20.8 5.7C20.8 8.3 19.2 9.8 16.6 12.2C15.1 13.6 13.2 15.3 11.2 17.7Z"
          stroke="#858585"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>

      <g id="active" clipPath="url(#clip0_3179_1099)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2 17.7C11 18 10.6 18 10.3 17.8C10.3 17.8 10.2 17.8 10.2 17.7C8.19999 15.3 6.39999 13.6 4.89999 12.2C2.39999 9.8 0.799988 8.2 0.799988 5.7C0.799988 3 2.99999 0.800003 5.79999 0.800003C7.79999 0.800003 9.19999 2.1 10.1 3.3C10.4 3.8 10.7 4.2 10.8 4.5C11 4.1 11.3 3.7 11.5 3.3C12.4 2.1 13.8 0.800003 15.8 0.800003C18.6 0.800003 20.8 3 20.8 5.7C20.8 8.3 19.2 9.8 16.6 12.2C15.1 13.6 13.2 15.3 11.2 17.7Z"
          fill="#ACB1B8"
          stroke="#ACB1B8"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>

      <defs>
        <clipPath id="clip0_3179_1084">
          <rect width="21.5" height="18.6" fill="white" />
        </clipPath>

        <clipPath id="clip0_3179_1099">
          <rect width="21.5" height="18.6" fill="white" />
        </clipPath>
      </defs>
    </StyledBox>
  );
}

export default memo(FavoriteDarkIcon);
