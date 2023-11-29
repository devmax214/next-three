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

function FavoriteIcon({
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
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      active={active}
      {...other}
    >
      <g id="inactive" clipPath="url(#clip0_68_2832)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1998 21.2001C11.9998 21.5001 11.5998 21.5 11.2998 21.3C11.2998 21.3 11.1998 21.3001 11.1998 21.2001C9.1998 18.8001 7.3998 17.1 5.8998 15.7C3.3998 13.3 1.7998 11.7 1.7998 9.20005C1.7998 6.50005 3.9998 4.30005 6.7998 4.30005C8.7998 4.30005 10.1998 5.60005 11.0998 6.80005C11.3998 7.30005 11.6998 7.70005 11.7998 8.00005C11.9998 7.60005 12.2998 7.20005 12.4998 6.80005C13.3998 5.60005 14.7998 4.30005 16.7998 4.30005C19.5998 4.30005 21.7998 6.50005 21.7998 9.20005C21.7998 11.8 20.1998 13.3 17.5998 15.7C16.0998 17.1 14.1998 18.8001 12.1998 21.2001Z"
          stroke="#292F3D"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>

      <g id="active" clipPath="url(#clip0_68_4219)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1998 21.2001C11.9998 21.5 11.5998 21.5 11.2998 21.3C11.2998 21.3 11.1998 21.3001 11.1998 21.2001C9.1998 18.8001 7.3998 17.1 5.8998 15.7C3.3998 13.3 1.7998 11.7 1.7998 9.20005C1.7998 6.50005 3.9998 4.30005 6.7998 4.30005C8.7998 4.30005 10.1998 5.60005 11.0998 6.80005C11.3998 7.30005 11.6998 7.70005 11.7998 8.00005C11.9998 7.60005 12.2998 7.20005 12.4998 6.80005C13.3998 5.60005 14.7998 4.30005 16.7998 4.30005C19.5998 4.30005 21.7998 6.50005 21.7998 9.20005C21.7998 11.8 20.1998 13.3 17.5998 15.7C16.0998 17.1 14.1998 18.8001 12.1998 21.2001Z"
          fill="url(#paint0_linear_68_4219)"
          stroke="url(#paint1_linear_68_4219)"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>

      <defs>
        <clipPath id="clip0_68_2832">
          <rect
            width="21.5"
            height="18.6"
            fill="white"
            transform="translate(1 3.5)"
          />
        </clipPath>

        <linearGradient
          id="paint0_linear_68_4219"
          x1="5.95093"
          y1="21.669"
          x2="13.8124"
          y2="5.77997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#560348" />
          <stop offset="0.081415" stopColor="#711248" />
          <stop offset="0.2268" stopColor="#9A2949" />
          <stop offset="0.3753" stopColor="#BD3D49" />
          <stop offset="0.5255" stopColor="#D84C4A" />
          <stop offset="0.6781" stopColor="#EB574A" />
          <stop offset="0.8343" stopColor="#F65D4A" />
          <stop offset="1" stopColor="#FA5F4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_68_4219"
          x1="5.95093"
          y1="21.669"
          x2="13.8124"
          y2="5.77997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#560348" />
          <stop offset="0.081415" stopColor="#711248" />
          <stop offset="0.2268" stopColor="#9A2949" />
          <stop offset="0.3753" stopColor="#BD3D49" />
          <stop offset="0.5255" stopColor="#D84C4A" />
          <stop offset="0.6781" stopColor="#EB574A" />
          <stop offset="0.8343" stopColor="#F65D4A" />
          <stop offset="1" stopColor="#FA5F4A" />
        </linearGradient>
        <clipPath id="clip0_68_4219">
          <rect
            width="21.5"
            height="18.6"
            fill="white"
            transform="translate(1 3.5)"
          />
        </clipPath>
      </defs>
    </StyledBox>
  );
}

export default memo(FavoriteIcon);
