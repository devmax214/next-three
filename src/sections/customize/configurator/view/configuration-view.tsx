import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import React, { useEffect, useState } from "react";
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
import { isEmpty } from "@/helpers/common";

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

export default function ConfigurationView(props: any) {
  const open = useBoolean();
  // const name = props.type === "T-Shirt" ? "T-Shirt" : props.type === 'Hoodies' ? "Hoodie" : props.type === "Pants" ? "Pant" : props.type === 'Shorts' ? "Short" : props.type === 'Oversize' ? "Oversized" : "Sweat-Shirt";
  const name = props.type;
  const router = useRouter();
  const isEdit = router.query.isEdit;
  const customProduct = router.query.customProduct ? JSON.parse(router.query.customProduct) : {};

  return (
    <>
      <CustomizeProvider passInitState={customProduct.context ? customProduct.context : {}}>
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
                { name: "Customize product" },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            <Grid container sx={{ pl: 2 }} spacing={6}>
              <Grid item md={8} xs={12}>
                <ConfigurationCanvas page="customize-view" ctx={typeof customProduct.context === "object" ? customProduct.context : {}} arrowLeftCount={0} arrowRightCount={0}  {...props} id="myCanvas" />
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 1, md: 0 }
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: { xs: "100%", md: 170 },
                      bgcolor: "#5C6166",
                      "&:hover": { bgcolor: "#550248" },
                    }}
                    onClick={open.onTrue}
                  >
                    <VideoIcon width={16} height={11} sx={{ marginRight: '9px' }} /> Watch tutorials
                  </Button>

                  <SaveButton {...props} isEdit name={customProduct.name} customId={customProduct._id} />

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
                <ConfigurationProperties {...props} {...customProduct} color={customProduct.context ? customProduct.context.color : ''} />
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

  const [name, setName] = useState(props.name);
  const [loading, setLoading] = useState(false);

  const save = async () => {
    let tmpContext = context;
    let promises = [];
    if (!isEmpty(tmpContext.tag.file) && typeof tmpContext.tag.file !== "string") {
      promises.push(
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(tmpContext.tag.file)
          reader.onload = () => {
            resolve({ key: 'tag', value: reader.result })
          }
          reader.onerror = reject
        })
      )
    }
    for (let i = 0; i < tmpContext.embellishment.length; i++) {
      if (!isEmpty(tmpContext.embellishment[i].file) && typeof tmpContext.embellishment[i].file !== "string") {
        promises.push(
          new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(tmpContext.embellishment[i].file)
            reader.onload = () => {
              resolve({ key: [i], value: reader.result })
            }
            reader.onerror = reject
          })
        )
      }
    }

    Promise.all(promises).then((result) => {
      for (let i = 0; i < result.length; i++) {
        const row = result[i];
        if (row.key === 'tag') {
          tmpContext.tag.file = row.value;
        } else {
          tmpContext.embellishment[row.key].file = row.value;
        }
      }
      const data = {
        customizeId: props.customId,
        name: name,
        product: props.type,
        context: tmpContext
      }

      axios.post(endpoints.customize.list, data).then((result) => {
        setLoading(false);
        cart.onFalse();
      }).catch((err) => {
        // router.push(PATH_SHOP.login);
        console.log(err)
        setLoading(false);
        cart.onFalse();
      });
    });
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
      <Modal className={"save-custom"} open={cart.value} sx={{ height: { xs: "70%", md: "100%" } }}>
        <Wrapper sx={{ top: { xs: "70%", md: "50%" } }}>
          <Stack alignItems="end">
            <IconButton
              onClick={() => {
                cart.onFalse();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 22.7812L22.7813 0.999986" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M1 1.21875L22.7813 23" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </IconButton>
          </Stack>
          <Card sx={{ bgcolor: "white", px: { md: 4, xs: "10px" }, py: { md: 6, xs: "39px" } }}>
            <Grid container>
              <Grid item md={8} xs={12}>
                <Box component={"div"} sx={{ width: 1, height: { md: 0.9, xs: "275px" }, background: "radial-gradient(rgba(255,255,255), rgb(211 210 210), rgb(171 167 167), rgba(149,149,149))", borderRadius: 5 }}>
                  <Image
                    src={image}
                    sx={{ width: 1, height: 1 }}
                  />
                </Box>
              </Grid>
              <Grid item md={4} mt={"39px"} xs={12}>
                <Stack gap={3} ml={{ md: 3, xs: 0 }}>
                  <TextField value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Product name" size="small" />

                  <LoadingButton loading={loading} fullWidth sx={{ mb: "20px" }} variant="contained" onClick={() => {
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
          width: { xs: "100%", md: 210 },
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