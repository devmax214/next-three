import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import React from "react";
import { Box, Container, Grid, Button, Modal } from "@mui/material";
import VideoIcon from "@/components/icons/icon-video";
import ConfigurationCanvas from "../configuration-canvas";
import ConfigurationProperties from "@/sections/customize/configurator/configuration-properties";
import { CustomizeProvider } from "@/components/customize/context";
import { useBoolean } from "@/hooks";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";


const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: "100%",
  maxWidth: 900,
  height: 557,
  transform: "translate(-50%, -50%)",
  zIndex: 99999,
  outline: "none",
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 20px)",
    right: 10,
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

type Props = {
  type: string
};

export default function ConfigurationView(props: Props) {
  const open = useBoolean();
  const name = props.type === "tshirts" ? "T-Shirt" : props.type === 'hoodies' ? "Hoodie" : props.type === "pants" ? "Pant" : props.type === 'shorts' ? "Short" : props.type === 'oversize' ? "Oversized" : "Sweat-Shirt";

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
              heading={name}
              links={[
                {
                  name: "Home",
                  href: PATH_CONFIGURATOR.root,
                },
                {
                  name: "Product Page",
                  href: PATH_CONFIGURATOR.root,
                },
                { name: name },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            <Grid container sx={{ pl: 2 }} spacing={6}>
              <Grid item md={8} xs={12}>
                <ConfigurationCanvas {...props} />
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: 170,
                      bgcolor: "#5C6166",
                      "&:hover": { bgcolor: "#550248" },
                    }}
                    onClick={open.onTrue}
                  >
                    <VideoIcon width={16} height={11} sx={{ marginRight: '9px' }} /> Watch tutorials
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      width: 210,
                      bgcolor: "#292F3D",
                      "&:hover": { bgcolor: "#550248" },
                    }}
                  >
                    Save Customization
                  </Button>

                  <Modal open={open.value}>
                    <Wrapper>
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=oUFJJNQGkhk"
                        width="100%"
                        height="100%"
                      />
                      <Button sx={{
                        position: "absolute",
                        top: 5,
                        right: -10,
                        width: 30,
                        height: 30,
                        color: '#fff',
                        fontSize: 25,
                        fontWeight: 100,
                        '&:hover': {
                          bgcolor: 'transparent'
                        },
                      }} onClick={open.onFalse}>X</Button>
                    </Wrapper>
                  </Modal>
                </Box>
              </Grid>

              <Grid item md={4} xs={12}>
                <ConfigurationProperties {...props} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CustomizeProvider >
    </>
  );
}
