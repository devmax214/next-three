import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  ListItemText,
  Stack,
} from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { signOut, useSession } from "next-auth/react";
import OrderIcon from "@/components/icons/customer/icon-order";
import UserIcon from "@/components/icons/customer/icon-user";
import AddressIcon from "@/components/icons/customer/icon-address";
import PasswordIcon from "@/components/icons/customer/icon-password";
import FeedbackIcon from "@/components/icons/customer/icon-feedback";
import LogoutIcon from "@/components/icons/customer/icon-logout";
import PaymentIcon from "@/components/icons/customer/icon-payment";
import QuoteIcon from "@/components/icons/customer/icon-quote";
import Label from "@/components/label";
import { secondaryFont } from "@/theme/typography";
import { JWTDeCode } from "@/auth/types";

const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
  backgroundColor: "#ffffff",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    // height: "calc(100vh - 64px)",
  },
}));

const StyledNavLink = styled(
  ({
    children,
    isCurrentPath,
    ...rest
  }: {
    isCurrentPath?: boolean;
    children: React.ReactNode;
  } & LinkProps) => <Link {...rest}>{children}</Link>
)(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.6rem 1rem",
  textDecoration: "none",
  color: "#292F3D",
  fontSize: 16,
  fontWeight: isCurrentPath ? 600 : 500,
  backgroundColor: isCurrentPath ? "#F9F5EE" : "transparent",
  fontFamily: secondaryFont.style.fontFamily,
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "& svg path": {
    fill: isCurrentPath ? "#fff" : "#292F3D",
  },
  "&:hover": {
    // borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    justifyContent: "center",
    padding: "0 5px",
    height: "80px",
    backgroundColor: "transparent",
    "& span": { textAlign: "center", lineHeight: "107%" },
  },
}));

const StyledNavLinkButton = styled(
  ({
    children,
    isCurrentPath,
    ...rest
  }: {
    isCurrentPath?: boolean;
    children: React.ReactNode;
  } & ButtonProps) => <Button {...rest}>{children}</Button>
)(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.6rem 1rem",
  textDecoration: "none",
  color: "#292F3D",
  fontSize: 16,
  fontWeight: isCurrentPath ? 600 : 500,
  backgroundColor: isCurrentPath ? "#F9F5EE" : "transparent",
  fontFamily: secondaryFont.style.fontFamily,
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "& svg path": {
    fill: isCurrentPath ? "#fff" : "#292F3D",
  },
  "&:hover": {
    // borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5px",
    height: "60px",
  },
}));

type Props = {};

export default function Navigations({ }: Props) {
  const { pathname } = useRouter();

  const { data: session } = useSession();

  const user = session?.user as JWTDeCode;

  return (
    <MainContainer>
      <Stack direction="row" p={2} sx={{ bgcolor: "#EDE9DC" }}>
        <Avatar
          alt="António Pereira"
          src="/images/avatar/5.jpg"
          sx={{ mr: 2 }}
        />

        <ListItemText
          primary={`${user?.firstname} ${user?.lastname}`}
          secondary={user?.email}
          primaryTypographyProps={{
            fontSize: 16,
            fontWeight: 600,
            color: "#292F3D",
            textTransform: "capitalize",
            fontFamily: secondaryFont.style.fontFamily,
          }}
          secondaryTypographyProps={{
            fontSize: 14,
            fontWeight: 500,
            color: "#5C6166",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        />
      </Stack>

      <Grid container mt={4} sx={{ borderTop: "1px solid #EEEEEE" }}>
        {linkList.map((link, index) => (
          <Grid
            xs={4}
            md={12}
            sx={{
              borderBottom: "1px solid #EEEEEE",
              position: "relative",
            }}
          >
            {link.href ? (
              <StyledNavLink
                key={index}
                href={link.href}
                isCurrentPath={pathname.includes(link.href)}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  alignItems="center"
                  gap={{ xs: 0.5, md: 2 }}
                >
                  <Box
                    component="div"
                    sx={{
                      bgcolor: pathname.includes(link.href || "#")
                        ? "#F05A4A"
                        : "transparent",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <link.icon />
                  </Box>
                  <span>{link.title}</span>
                </Stack>

                {link.count && (
                  <Label
                    sx={{
                      bgcolor: "#EDE9DC",
                      color: "#292F3D",
                      fontSize: 14,
                      position: { xs: "absolute", md: "relative" },
                      right: { xs: 10, md: "auto" },
                      top: { xs: 10, md: "auto" },
                    }}
                  >
                    {link.count}
                  </Label>
                )}
              </StyledNavLink>
            ) : (
              <StyledNavLinkButton
                key={index}
                fullWidth
                onClick={() => signOut({ redirect: false })}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  alignItems="center"
                  gap={{ xs: 0.5, md: 2 }}
                >
                  <Box
                    component="div"
                    sx={{
                      bgcolor: pathname.includes(link.href || "#")
                        ? "#F05A4A"
                        : "transparent",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <link.icon />
                  </Box>
                  <span>{link.title}</span>
                </Stack>

                {link.count && (
                  <Label
                    sx={{ bgcolor: "#EDE9DC", color: "#292F3D", fontSize: 14 }}
                  >
                    {link.count}
                  </Label>
                )}
              </StyledNavLinkButton>
            )}
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
}

const linkList = [
  {
    title: "My Profile",
    href: "/user/profile",
    icon: () => <UserIcon sx={{ width: 20, height: 20 }} />,
  },
  {
    title: "Orders",
    href: "/user/order",
    icon: () => <OrderIcon sx={{ width: 16, height: 20 }} />,
    // count: localStorage.getItem("userCnt") ? JSON.parse(localStorage.getItem("userCnt") as any).orderCnt : null,
  },
  {
    title: "Address",
    href: "/user/address",
    icon: () => <AddressIcon sx={{ width: 15, height: 20 }} />,
    // count: localStorage.getItem("userCnt") ? JSON.parse(localStorage.getItem("userCnt") as any).addressCnt : null,
  },
  {
    title: "Payment methods",
    href: "/user/payment",
    icon: () => <PaymentIcon sx={{ width: 17, height: 16 }} />,
  },
  {
    title: "Change password",
    href: "/user/password",
    icon: () => <PasswordIcon sx={{ width: 19, height: 19 }} />,
  },
  {
    title: "Feedback/ Rating",
    href: "/user/feedback",
    icon: () => <FeedbackIcon sx={{ width: 32, height: 32 }} />,
  },
  {
    title: "Quote Requests",
    href: "/user/quote",
    icon: () => <QuoteIcon sx={{ width: 19, height: 19 }} />,
  },
  {
    title: "Logout",
    icon: () => <LogoutIcon sx={{ width: 20, height: 17 }} />,
  },
];
