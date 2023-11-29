import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./header";
import Main from "./main";
import NavVertical from "./nav/nav-vertical";

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = (
    <NavVertical openNav={open} onCloseNav={handleClose} />
  );

  return (
    <>
      <Header onOpenNav={handleOpen} />

      <Box
        component="div"
        sx={{
          display: { lg: "flex" },
          minHeight: { lg: 1 },
          bgcolor: "#EDE9DC",
        }}
      >
        {renderNavVertical}

        <Main>{children}</Main>
      </Box>
    </>
  );
}
