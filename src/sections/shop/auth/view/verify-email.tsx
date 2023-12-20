"use client";
import axios from "axios";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { primaryFont, secondaryFont } from "@/theme/typography";

export default function VerifyEmailView() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter()

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/auth/verify", {
        token,
      });
      router.push({
        pathname: "/auth/auth",
        query: {
          state: 1,
          msg: "Email verified successfully!"
        }
      }, "/auth/auth");
    } catch (error: any) {
      router.push({
        pathname: "/auth/auth",
        query: {
          state: 1,
          msg: "Email verify failed!"
        }
      }, "/auth/auth");
      setError(true);
    }
  };

  useEffect(() => {
    const url = window.location.search;
    const urltoken = url.split("=")[1];
    setToken(urltoken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
          height: "100%"
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            textAlign: "center",
            py: { xs: 10, md: 10 },
          }}
        >
          <Typography variant="h3" sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#292F3D",
            fontFamily: primaryFont.style.fontFamily,
            fontStyle: "normal",
            lineHeight: "normal",
            mb: 4
          }}>
            Verify Email
          </Typography>
          <Typography variant="h3" sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            fontStyle: "normal",
            lineHeight: "normal",
            mt: 4
          }}>
            {token ? token : "No Token"}
          </Typography>
        </Container>
      </Box>
    </>
  );
}