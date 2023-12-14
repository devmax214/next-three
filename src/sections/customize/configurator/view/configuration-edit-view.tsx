import React from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import ConfigurationCanvas from "../configuration-canvas";
import ConfigurationDetails from "@/sections/customize/configurator/configuration-details";
import { CustomizeProvider } from "@/components/customize/context";
import { Box, Container, Grid, Button, Modal } from "@mui/material";
import VideoIcon from "@/components/icons/icon-video";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import { useBoolean } from "@/hooks";

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: "100%",
  maxWidth: 1057,
  height: 557,
  transform: "translate(-50%, -50%)",
  zIndex: 99999,
  outline: "none",
  borderRadius: "15px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 20px)",
    right: 10,
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  "iframe": {
    borderRadius: '15px'
  }
}));

type Props = {
  type: string;
};

export default function ConfigurationEditView({ customProduct }) {
  const open = useBoolean();
  const props = {
    ...customProduct,
    type: customProduct.product,
  }
  return (
    <>
      <CustomizeProvider>
        <Box
          component="div"
          sx={{
            bgcolor: "#F9F5EE",
            position: "relative",
            pt: { xs: 10, md: 10 },
          }}
        >
          <Container
            sx={{
              pb: { xs: 10, md: 10 },
            }}
          >
            <CustomBreadCrumbs
              heading={props.type}
              links={[
                {
                  name: "Home",
                  href: PATH_CONFIGURATOR.root,
                },
                {
                  name: "Customized Product Gallery",
                  href: PATH_CONFIGURATOR.gallery,
                },
                { name: customProduct.name },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            <Grid container spacing={5}>
              <Grid item md={8} xs={12}>
                <ConfigurationCanvas id="myCanvas" {...props}/>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    flexDirection: {xs: "column", md: "row"}
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: {xs: "100%", md: 170},
                      bgcolor: "#5C6166",
                      "&:hover": { bgcolor: "#550248" },
                    }}
                    onClick={open.onTrue}
                  >
                    <VideoIcon width={16} height={11} sx={{ marginRight: '9px' }} /> Watch tutorials
                  </Button>

                  <Modal open={open.value}>
                    <Wrapper>
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
                        width="100%"
                        height="100%"
                      />
                      <Button sx={{
                        position: "absolute",
                        top: 5,
                        right: 4,
                        width: 30,
                        height: 30,
                        color: '#fff',
                        fontSize: 25,
                        fontWeight: 100,
                        minWidth: 30,
                        '&:hover': {
                          bgcolor: 'transparent'
                        },
                      }} onClick={open.onFalse}>X</Button>
                    </Wrapper>
                  </Modal>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <ConfigurationDetails {...props} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CustomizeProvider>
    </>
  );
}
