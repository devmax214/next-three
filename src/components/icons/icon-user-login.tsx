import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)<{
  login: boolean;
}>(({ theme, login }) => ({
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
  ...(login && {
    "& #inactive": {
      display: "none",
    },
    "& #active": { display: "block" },
  }),
}));

function LoginUserIcon({
  login,
  ...other
}: {
  login: boolean;
} & BoxProps) {
  return (
    <StyledBox
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      login={login}
      {...other}
    >
      <path
        id="active"
        d="M1.7 19.5C0.8 19.5 0 19 0 17.8C0 17.5 0.400001 11.3 9.8 11.3C19.1 11.3 19.5 17.5 19.6 17.8C19.6 18.9 18.8 19.4 18 19.5H1.7ZM9.8 9.8C7 9.8 4.8 7.6 4.8 4.9C4.8 2.2 7 0 9.8 0C12.5 0 14.7 2.2 14.7 4.9C14.7 7.6 12.5 9.8 9.8 9.8Z"
        fill="url(#paint0_linear_3200_1216)"
      />

      <path
        id="inactive"
        d="M1.7 19.5C0.8 19.5 0 19 0 17.8C0 17.5 0.400001 11.3 9.8 11.3C19.1 11.3 19.5 17.5 19.6 17.8C19.6 18.9 18.8 19.4 18 19.5H1.7ZM1.7 18H17.9C18 18 18 18 18.1 18C18.1 18 18.1 18 18.1 17.9C18.1 17.7 17.8 12.9 9.8 12.9C1.9 12.9 1.6 17.7 1.5 18C1.5 18.1 1.5 18.1 1.5 18.1C1.5 18 1.6 18 1.7 18ZM9.8 9.8C7 9.8 4.8 7.6 4.8 4.9C4.8 2.2 7 0 9.8 0C12.5 0 14.7 2.2 14.7 4.9C14.7 7.6 12.5 9.8 9.8 9.8ZM9.8 1.5C7.9 1.5 6.3 3 6.3 4.9C6.3 6.8 7.8 8.3 9.7 8.3C11.6 8.3 13.1 6.8 13.1 4.9C13.2 3 11.6 1.5 9.8 1.5Z"
        fill="#292F3D"
      />

      <defs>
        <linearGradient
          id="paint0_linear_3200_1216"
          x1="16.5"
          y1="3.5"
          x2="0.500001"
          y2="19.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F65D4B" />
          <stop offset="0.734375" stopColor="#801A49" />
          <stop offset="1" stopColor="#550248" />
        </linearGradient>
      </defs>
    </StyledBox>
  );
}

export default memo(LoginUserIcon);
