import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Box, Container, Typography, Grid, Button, Modal, Stack, Card, IconButton, TextField, AppBar, Toolbar, Divider } from "@mui/material";
import VideoIcon from "@/components/icons/icon-video";
import ConfigurationCanvas from "../configuration-canvas";
import ConfigurationProperties from "@/sections/customize/configurator/configuration-properties";
import { CustomizeProvider } from "@/components/customize/context";
import { useBoolean } from "@/hooks";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import axios from "axios";
import { endpoints } from "../../../../../global-config";
import { useCustomizeContext } from "@/components/customize/context";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "@/components/image";
import { useRouter } from "next/router";
import { Texture } from "three";
import useStore, { getState, setState } from '@/helpers/store';
import { embelRenders } from "@/constant/embelConst";
import { PDFExport } from "@progress/kendo-react-pdf";
import CustomizeLayout from "@/layouts/customize";
import { HEADER } from "../../../../../global-config";
import Logo from "@/components/logo";
import { useResponsive } from "@/hooks";
import FootIcon1 from "@/components/icons/footer/icon1";
import FootIcon2 from "@/components/icons/footer/icon2";
import FacebookIcon from "@/components/icons/icon-facebook";
import InstagramIcon from "@/components/icons/icon-instagram";
import LinkedinIcon from "@/components/icons/icon-linkedin";
import TiktokIcon from "@/components/icons/icon-tiktok";
import WhatsappIcon from "@/components/icons/icon-whatsapp";
import Icon1 from '@/components/icons/auth/icon1';
import Icon2 from '@/components/icons/auth/icon2';
import Icon3 from '@/components/icons/auth/icon3';
import Icon4 from '@/components/icons/auth/icon4';

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
  const name = props.type;
  const router = useRouter();
  const isEdit = router.query.isEdit;
  const customProduct = router.query.customProduct ? JSON.parse(router.query.customProduct as string) : {};
  const canvasRef = useRef<any>(null);
  const textureRef = useRef<Texture>(null);
  setState({ isMaskAdded: false })
  const [current, setCurrent] = useState(canvasRef.current);
  useEffect(() => {
    setCurrent(canvasRef.current)
  }, [canvasRef.current])

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
                <ConfigurationCanvas
                  canvasRef={canvasRef} textureRef={textureRef}
                  page="customize-view" ctx={typeof customProduct.context === "object" ? customProduct.context : {}}
                  arrowLeftCount={0} arrowRightCount={0}  {...props} id="myCanvas"
                />
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
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 1, md: 0 }
                  }}
                >
                  <DownloadButton {...props} isEdit name={customProduct.name} customId={customProduct._id} />
                </Box>
              </Grid>

              <Grid item md={4} xs={12}>
                <ConfigurationProperties
                  canvasRef={current} textureRef={textureRef} {...props} {...customProduct} color={customProduct.context ? customProduct.context.color : ''} />
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
    const data = {
      customizeId: props.customId,
      name: name,
      product: props.type,
      context: context
    }
    axios.post(endpoints.customize.list, data).then((result) => {
      setLoading(false);
      cart.onFalse();
    }).catch((err) => {
      // router.push(PATH_SHOP.login);
      setLoading(false);
      cart.onFalse();
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

const DownloadButton = (props: any) => {
  const customize = useCustomizeContext();
  const pdfExportComponent = useRef(null);
  const { renderPrices, renderMain } = embelRenders(props.type, customize);

  const cart = useBoolean();
  const [image, setImage] = useState();
  const [name, setName] = useState(props.name);

  const download = () => {
    if (pdfExportComponent.current) {
      // document.getElementsByClassName('pdf-export')[0].scrollTop = document.getElementsByClassName('pdf-export')[0].scrollHeight;
      pdfExportComponent.current.save(() => { cart.onFalse() });
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

  const renderHeader = (
    <Box
      component="main"
      sx={{
        position: "absolute",
        height: {
          xs: HEADER.H_MOBILE,
          md: HEADER.H_DESKTOP,
        },
        '.MuiContainer-root': {
          maxWidth: 1280
        },
        width: "100vw",
        bgcolor: "white",
        zIndex: 1,
      }}
    >
      <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
        <Logo color="colored" sx={{ width: { xs: 158, md: 200 } }} />
      </Container>
    </Box>
  );

  const upMd = useResponsive("up", "md");
  const renderFooter = (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#550248",
        color: "#ffffff",
        '.MuiContainer-root': {
          maxWidth: 1280
        },
        marginTop: "65px"
      }}
    >
      <Divider />
      <Container
        sx={{
          pt: 10,
          pb: 10,
          textAlign: { xs: "left", md: "unset" },
        }}
      >
        <Stack
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          justifyContent={"flex-start"}
          gap={{ xs: 4, md: 0 }}
        >
          <Stack gap={10}>
            <Logo sx={{ mb: { xs: 0, md: 3 }, mr: { xs: 0, md: 10 } }} />

            {upMd && (
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#ACB1B8",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Copyright 2023 WonderRaw
              </Typography>
            )}
          </Stack>
          <Stack gap={2} sx={{ flexWrap: "wrap", height: { xs: "115px", md: "auto" } }}>
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                color: "#fff",
                fontWeight: 600,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Contact us
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                fontWeight: 500,
                color: "#ACB1B8",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Free hotline
              <br /> 0800 - 3 230 111 2
              <br />
              <br />
              info@wonder-raw.com
            </Typography>

            <Stack direction="row" gap={1} sx={{ mt: { xs: "30px", md: 0 } }}>
              <IconButton>
                <FacebookIcon
                  sx={{ width: 9, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <LinkedinIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <TiktokIcon
                  sx={{ width: 16, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <WhatsappIcon
                  sx={{ width: 18, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Box
          component="div"
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            width: { xs: 75, md: "149.598px" },
            height: { xs: 93, md: "185.287px" },
            transform: "translateY(-50%)",
          }}
        >
          <FootIcon1 />
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: 0,
            top: { xs: -10, md: 25 },
            width: { xs: 55, md: '137.1px' },
            height: { xs: 47.82, md: '186px' },
            transform: "translateY(-100%)",
          }}
        >
          <FootIcon2 />
        </Box>
      </Container>
    </Box>
  );

  const renderContent = (
    <Box
      className="pdf-main"
      component="div"
      sx={{
        bgcolor: "#F9F5EE",
        position: "relative",
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container
        sx={{
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            color: "#5C6166",
            fontSize: 16,
            fontweight: 500,
            fontFamily: secondaryFont.style.fontFamily
          }}>
          Your Request:
        </Typography>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#292F3D",
            fontSize: 16,
            fontweight: 700,
            fontFamily: secondaryFont.style.fontFamily,
            mb: 2
          }}>
          customize product
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <Box component={"div"} sx={{ position: "relative", height: window.screen.width > 760 ? 500 : 280, backgroundColor: "grey", /*background: "radial-gradient(rgba(255,255,255), rgb(211 210 210), rgb(171 167 167), rgba(149,149,149))", */borderRadius: 5 }}>
              <Image
                src={image}
                sx={{ width: "100%", height: "auto", position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)' }}
              />
            </Box>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#292F3D",
                fontSize: 26,
                fontWeight: 700,
                mt: 5
              }}>
              Product Info:
            </Typography>
            {renderMain}
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Container>
    </Box>
  )

  const renderModal = (
    <>
      <Modal className={"pdf-export"} open={cart.value} sx={{ scrollBehavior: "smooth", top: 0, left: 0, overflow: 'auto' }}>
        <Wrapper sx={{ top: 0, left: 0, transform: 'translate(-0%, -0%)' }} >
          <Card sx={{ bgcolor: "white", width: "100vw" }}>
            <PDFExport scale={0.5} paperSize={"auto"} ref={pdfExportComponent}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column", height: 1 }}
              >
                {renderHeader}
                <Box
                  component="main"
                  sx={{
                    position: "relative",
                    flexGrow: 1,
                    top: { xs: 63, md: 80 },
                    '.MuiContainer-root': {
                      maxWidth: 1350,
                      pb: { md: 20, xs: 12 }
                    },
                  }}
                >
                  {renderContent}
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      left: { xs: 38, md: 67 },
                      top: { xs: "3px", md: "3px" },
                      width: { xs: 17, md: "22px" },
                      height: { xs: 18.23, md: "22px" },
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Icon1 />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      left: { xs: 4, md: 24 },
                      top: { xs: 10, md: 30 },
                      width: { xs: 10, md: "12px" },
                      height: { xs: 10.73, md: "12px" },
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Icon2 />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      right: { xs: 30, md: 40 },
                      top: { xs: "3px", md: "3px" },
                      width: { xs: 18, md: "24px" },
                      height: { xs: 19.31, md: "24px" },
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Icon3 />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      right: { xs: 7, md: 10 },
                      top: { xs: 10, md: 40 },
                      width: { xs: 10, md: "14px" },
                      height: { xs: 10.73, md: "14px" },
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Icon4 />
                  </Box>
                </Box>
                {renderFooter}
              </Box>
            </PDFExport>
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
        onClick={() => {
          openModal();
          setTimeout(() => {
            download();
          }, 2);
        }}
      >
        Download Customization
      </Button>
      {renderModal}
    </>
  )
}
