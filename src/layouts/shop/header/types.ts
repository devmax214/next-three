import React from "react";
import { ListItemButtonProps } from "@mui/material";

export type NavItemProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
  underline?: boolean;
};

export interface NavItemDesktopProps extends ListItemButtonProps {
  item: NavItemProps;
  offsetTop?: boolean;
}

export type NavProps = {
  offsetTop: boolean;
  data: NavItemProps[];
};
