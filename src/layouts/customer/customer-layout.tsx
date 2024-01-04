import React from "react";
import CustomizeLayout from "@/layouts/customize";
import { Box, Container, Grid } from "@mui/material";
import Navigations from "./navigations";
import AuthGuard from "@/auth/auth-guard";

type Props = {
  Breadcrumbs: React.ReactNode;
  children: React.ReactNode;
};

export default function CustomerLayout({ Breadcrumbs, children }: Props) {
  return (
    <AuthGuard>
      <CustomizeLayout>
        <Box component="div" sx={{
          bgcolor: "#F9F5EE",
          '.MuiContainer-root': {
            maxWidth: 1310,
          },
        }}>
          <Container
            sx={{
              py: { xs: 10, md: 10 },
            }}
          >
            {Breadcrumbs}

            <Grid container spacing={{ xs: 3, md: 2 }}>
              <Grid item xs={12} md={3}>
                <Navigations {...children.props} />
              </Grid>
              <Grid item xs={12} md={9}>
                <Box component="div" pl={{ xs: 0, md: 3 }}>
                  {children}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CustomizeLayout>
    </AuthGuard>
  );
}
