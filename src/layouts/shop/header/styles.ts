import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import { NavItemDesktopProps } from "@/layouts/shop/header/types";

type ListItemProps = Omit<NavItemDesktopProps, "item">;

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== "active" &&
    prop !== "open" &&
    prop !== "offsetTop" &&
    prop !== "subItem",
})<ListItemProps>(({ active, open, offsetTop, subItem, theme }) => {
  const dotActive = {
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: 6,
    height: 6,
    left: -14,
    opacity: 0.48,
    backgroundColor: "currentColor",
  };

  return {
    ...theme.typography.subtitle2,
    padding: 0,
    height: "100%",
    color: theme.palette.text.primary,
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.shorter,
    }),
    "&:hover": {
      opacity: 0.48,
      backgroundColor: "transparent",
    },
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // offsetTop
    ...(offsetTop && {
      color: theme.palette.text.primary,
    }),
    // Active
    ...(active && {
      color: theme.palette.primary.main,
      "&::before": dotActive,
    }),
    // Active sub item
    ...(active &&
      subItem && {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        "&::before": {
          ...dotActive,
          color: theme.palette.primary.main,
        },
      }),
    // Open
    ...(open && {
      opacity: 0.48,
    }),
  };
});
