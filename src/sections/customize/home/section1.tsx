import { Box, Container, ButtonBase, Modal, Typography, Button } from "@mui/material";
import { useBoolean } from "@/hooks";
import SvgColor from "@/components/svg-color";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import { primaryFont } from "@/theme/typography";
import { MotionViewport } from "@/components/animate";
import Image from "@/components/image";
import { useResponsive } from "@/hooks";

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "100%",
  maxWidth: 907,
  width: "100%",
  height: 510,
  transform: "translateX(-50%)",
  zIndex: 99999,
  outline: "none",
  borderRadius: "15px",
  [theme.breakpoints.down("md")]: {
    height: 430
  },
  "iframe": {
    borderRadius: '15px'
  }
}));


type Props = {};

export default function Section1(props: Props) {
  const upMd = useResponsive("up", "md");
  const open = useBoolean();

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#F9F5EE",
        position: "relative",
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 10 },
        }}
      >
        <Box
          component="div"
          sx={{
            borderRadius: "15px",
            mt: { xs: 0, md: "12px" },
            position: "relative",
          }}
        >
          <Image
            src={
              upMd
                ? "/images/customize/dashboard.jpeg"
                : "/images/customize/mobile.png"
            }
            width="100%"
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: "50%",
              bottom: 16,
              transform: "translateX(-50%)",
            }}
          >
            <ButtonBase onMouseOver={open.onTrue}>
              <Typography sx={{ ml: 4, fontSize: 23, fontWeight: 500, color: "#F05A4A", fontFamily: primaryFont.style.fontFamily, fontStyle: 'normal' }}>
                WATCH
              </Typography>

              <SvgColor
                src={open.value ? "/icons/arrow-down.svg" : "/icons/arrow-icon.svg"}
                color="#F05A4A"
                sx={{ width: 25, height: 22, ml: 0.5, marginTop: open.value ? 2 : 0 }}
              />
            </ButtonBase>
          </Box>
          <Wrapper style={{ display: open.value ? "block" : "none" }}>
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
        </Box>
      </Container>
    </Box>
  );
}
