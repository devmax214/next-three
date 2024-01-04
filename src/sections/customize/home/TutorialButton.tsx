import { Box, ButtonBase, Modal, Typography, Button } from "@mui/material";
import { useBoolean } from "@/hooks";
import SvgColor from "@/components/svg-color";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import { primaryFont } from "@/theme/typography";

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

type Props = {};

export default function TutorialButton(props: Props) {
  const open = useBoolean();

  return (
    <>
      <ButtonBase onClick={open.onTrue}>
        <Typography sx={{ ml: 4, fontSize: 23, fontWeight: 500, color: "#F05A4A", fontFamily: primaryFont.style.fontFamily, fontStyle: 'normal' }}>
          WATCH
        </Typography>

        <SvgColor
          src="/icons/arrow-icon.svg"
          color="#F05A4A"
          sx={{ width: 25, height: 22, ml: 1 }}
        />
      </ButtonBase>

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
    </>
  );
}
