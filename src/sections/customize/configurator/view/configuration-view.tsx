import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import React, { useState } from "react";
import { Box, Container, Grid, Button, Modal, Stack, Card, IconButton, TextField } from "@mui/material";
import VideoIcon from "@/components/icons/icon-video";
import ConfigurationCanvas from "../configuration-canvas";
import ConfigurationProperties from "@/sections/customize/configurator/configuration-properties";
import { CustomizeProvider } from "@/components/customize/context";
import { useBoolean } from "@/hooks";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { endpoints } from "../../../../../global-config";
import { uploadImage } from "@/services/upload";
import { useCustomizeContext } from "@/components/customize/context";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";
import { RHFTextField } from "@/components/hook-form";
import Image from "@/components/image";
import { useRouter } from "next/router";
import { PATH_SHOP } from "@/routers/path";

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
  type: string
};

export default function ConfigurationView(props: Props) {
  const open = useBoolean();
  // const name = props.type === "T-Shirt" ? "T-Shirt" : props.type === 'Hoodies' ? "Hoodie" : props.type === "Pants" ? "Pant" : props.type === 'Shorts' ? "Short" : props.type === 'Oversize' ? "Oversized" : "Sweat-Shirt";
  const name = props.type;

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
                <ConfigurationCanvas {...props} id="myCanvas" />
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

                  <SaveButton {...props} />

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
                <ConfigurationProperties {...props} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CustomizeProvider >
    </>
  );
}

const SaveButton = (props: any) => {
  const router = useRouter();
  const context = useCustomizeContext();
  const cart = useBoolean();
  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const save = async () => {
    var canvas = document.getElementById('myCanvas')?.getElementsByTagName('canvas')[0] as any;
    if (canvas) {
      var imageData = canvas.toDataURL();
      const images = [];
      images.push(imageData);
      const data = {
        images: images,
        name: name,
        price: Number((40 - Math.random() * 20).toFixed(0)),
        code: '123',
        product: props.type,
        color: context.color,
      }

      axios.post(endpoints.customize.list, data).then((result) => {
        setLoading(false);
        cart.onFalse();
      }).catch((err) => {
        router.push(PATH_SHOP.login);
      });
    }
  }

  const openModal = () => {
    cart.onTrue();
    var canvas = document.getElementById('myCanvas')?.getElementsByTagName('canvas')[0] as any;
    if (canvas) {
      var imageData = canvas.toDataURL();
      setImage(imageData);
    }
  }

  const renderModal = (
    <>
      <Modal open={cart.value}>
        <Wrapper>
          <Stack alignItems="end">
            <IconButton
              onClick={() => {
                cart.onFalse();
              }}
            >
              <Iconify
                icon="material-symbols:close"
                width={{ xs: 20, md: 36 }}
                color="#ffffff"
              />
            </IconButton>
          </Stack>
          <Card sx={{ px: 4, py: 6 }}>
            <Grid container>
              <Grid item md={8}>
                <Box component={"div"} sx={{ height: 484, width: 620, background: "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(149,149,149,1) 100%)", borderRadius: 5 }}>
                  <Image
                    src={image}
                    sx={{ width: 1 }}
                  />
                </Box>
              </Grid>
              <Grid item md={4} mt={3}>
                <Stack gap={3}>
                  {/* <RHFTextField name="name" placeholder="Product name" /> */}
                  <TextField value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Product name" size="small" />

                  <LoadingButton loading={loading} fullWidth variant="contained" onClick={() => {
                    setLoading(true);
                    save();
                  }
                  }>
                    SAVE
                  </LoadingButton>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Wrapper>
      </Modal>
    </>
  );

  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: 210,
          bgcolor: "#292F3D",
          "&:hover": { bgcolor: "#550248" },
        }}
        onClick={openModal}
      >
        Save Customization
      </Button>

      {renderModal}
    </>
  )
}