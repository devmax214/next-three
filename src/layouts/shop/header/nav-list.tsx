import { Box, Fade, Paper } from "@mui/material";
import { NavItem } from "./nav-item";
import { NavItemProps } from "./types";
import { useBoolean } from "@/hooks";
import { styled } from "@mui/material/styles";
import { paper } from "@/theme/css";
import { HEADER } from "../../../../global-config";

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  position: "absolute",
  top: HEADER.H_DESKTOP_OFFSET,
  padding: theme.spacing(5),
  zIndex: theme.zIndex.modal,
  backgroundColor: "#ffffff",
  width: "518px",
}));

type Props = {
  item: NavItemProps;
  offsetTop: boolean;
};

export default function NavList({ item, offsetTop }: Props) {
  const nav = useBoolean();

  const { path, children } = item;

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  return (
    <Box component="div" sx={{ position: "relative" }}>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />

      {/*<Portal>*/}
      <Fade in={nav.value}>
        <StyledMenu
          onMouseEnter={handleOpenMenu}
          onMouseLeave={nav.onFalse}
          sx={{ display: "flex" }}
        >
          {children}
        </StyledMenu>
      </Fade>
      {/*</Portal>*/}
    </Box>
  );
}
