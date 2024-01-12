import { Box, Container, Grid, Stack, Modal, Card, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Icon2 from '@/components/icons/auth/icon2';
import Icon3 from '@/components/icons/auth/icon3';
import ModalFootIcon from '@/components/icons/footer/modal';
import Iconify from "@/components/iconify";
import { primaryFont, secondaryFont } from "@/theme/typography";

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 100,
  transform: "translateX(-50%)",
  width: "40%",
  outline: "none",
}));
export default function CommonConfirmModal({ opened, setOpened, content }: any) {
  return (
    <>
      <Modal open={opened}>
        <Wrapper>
          <Card sx={{ px: 5, py: 18 }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 20,
                top: 20,
                width: { xs: 93, md: "20px" },
                height: { xs: 68.55, md: "20px" },
              }}
            >
              <Icon3 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 67,
                top: 35,
                width: { xs: 93, md: "12px" },
                height: { xs: 68.55, md: "12px" },
              }}
            >
              <Icon2 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                rotate: "-90deg",
                right: 15,
                bottom: -5,
                width: { xs: 93, md: "60px" },
                height: { xs: 68.55, md: "65px" },
              }}
            >
              <ModalFootIcon />
            </Box>
            <Stack alignItems="end">
              <IconButton
                onClick={() => {
                  setOpened(false)
                }}
                sx={{ fontWeight: 300, position: "absolute", top: 5, right: 5 }}
              >
                <Iconify
                  icon="material-symbols:close"
                  width={{ xs: 24, md: 42 }}
                  color="#5C6166"
                  fontWeight={300}
                />
              </IconButton>
            </Stack>
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: 22,
                fontweight: 500,
                textAlign: "center",
                fontFamily: secondaryFont.style.fontFamily
              }}>
              {content}
            </Typography>
          </Card>
        </Wrapper>
      </Modal>
    </>
  )
};