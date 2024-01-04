import { Box, Drawer, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useResponsive } from "@/hooks";
import Scrollbar from "@/components/scrollbar";
import Logo from "@/components/logo";
import { NavSectionVertical } from "@/components/nav-section";
import navConfig from "./config-navigation";
import { NAV } from "../../../../../global-config";

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "lg");

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo />
      </Stack>

      <NavSectionVertical data={navConfig} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              // bgcolor: theme.palette.grey[900],
              bgcolor: "#550248",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
