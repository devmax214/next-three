import { List, Stack } from "@mui/material";
import { NavSectionProps } from "../types";
import NavList from "./nav-list";
import { navVerticalConfig } from "../config";

export default function NavSectionVertical({
  data,
  config,
  sx,
  ...other
}: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      <List disablePadding sx={{ px: 2 }}>
        {data.map((list) => (
          <NavList
            key={list.title + list.path}
            data={list}
            depth={1}
            hasChild={!!list.children}
            config={navVerticalConfig(config)}
          />
        ))}
      </List>
    </Stack>
  );
}
