import { Box, Grid, IconButton, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BottomIcon from "@/components/icons/icon-bottom";
import TopIcon from "@/components/icons/icon-top";
import CloseIcon from "@/components/icons/icon-close";
import { secondaryFont } from "@/theme/typography";
import { useBoolean } from "@/hooks";

import NewsletterForm from "./newsletter-form";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 720,
  outline: "none",
  borderRadius: 18,
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
}));

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function NewsletterModal({ open, onClose }: Props) {
  const form = useBoolean();

  const renderForm = (
    <Grid container sx={{ height: 410 }}>
      <Grid lg={5} md={5}>
        <Box
          component="div"
          sx={{ backgroundImage: "/images/home/newsletter.jpg" }}
        >
          <Box component="img" src="/images/home/newsletter.jpg" />
        </Box>
      </Grid>
      <Grid lg={7} md={7}>
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <NewsletterForm onSuccess={form.onTrue} />
        </Stack>
      </Grid>
    </Grid>
  );

  const renderSuccess = (
    <Box
      component="div"
      sx={{
        height: 270,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 16, md: 16 },
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
          textAlign: "center",
        }}
      >
        Thank you for subscribing. <br />
        Please check your email to get the Discount Code
      </Typography>

      <Box
        component="div"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 70,
          height: 50,
        }}
      >
        <BottomIcon />
      </Box>

      <Box
        component="div"
        sx={{ position: "absolute", top: 20, left: 20, width: 47, height: 26 }}
      >
        <TopIcon />
      </Box>
    </Box>
  );

  return (
    <Modal open={open}>
      <Wrapper>
        {form.value ? renderSuccess : renderForm}

        <IconButton
          sx={{
            position: "absolute",
            right: 15,
            top: 10,
            width: 34,
            height: 34,
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Wrapper>
    </Modal>
  );
}
