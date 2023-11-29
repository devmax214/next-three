import { alpha, Theme } from "@mui/material/styles";
import { ratingClasses } from "@mui/material/Rating";
import SvgIcon, { svgIconClasses, SvgIconProps } from "@mui/material/SvgIcon";

const Icon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 33 33">
    <path d="M16.6162 0.304688L20.2084 11.3604H31.8331L22.4286 18.1932L26.0208 29.249L16.6162 22.4161L7.21165 29.249L10.8039 18.1932L1.39931 11.3604H13.024L16.6162 0.304688Z" />
  </SvgIcon>
);

export default function Rating(theme: Theme) {
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: <Icon />,
        icon: <Icon />,
      },
      styleOverrides: {
        root: {
          [`&.${ratingClasses.disabled}`]: {
            opacity: 0.48,
          },
        },
        icon: {
          color: "#F05A4A"
        },
        iconEmpty: {
          color: alpha(theme.palette.grey[500], 0.48),
        },
        sizeSmall: {
          [`& .${svgIconClasses.root}`]: {
            width: 20,
            height: 20,
          },
        },
        sizeMedium: {
          [`& .${svgIconClasses.root}`]: {
            width: 24,
            height: 24,
          },
        },
        sizeLarge: {
          [`& .${svgIconClasses.root}`]: {
            width: 28,
            height: 28,
          },
        },
      },
    },
  };
}
