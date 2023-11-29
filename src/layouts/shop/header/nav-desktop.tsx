import { Stack } from "@mui/material";
import { NavProps } from "./types";
import NavList from "./nav-list";

export default function NavDesktop({ data, offsetTop }: NavProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={2}
      sx={{ ml: 8, mr: 2.5, height: 1 }}
    >
      {data.map((link) => (
        <NavList key={link.title} item={link} offsetTop={offsetTop} />
      ))}
    </Stack>
  );
}
