import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Category = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 64 64">
      <path d="M52.65 18.48h-41.3a1.5 1.5 0 1 1 0-3h41.3a1.5 1.5 0 0 1 0 3zm0 10.01h-41.3a1.5 1.5 0 1 1 0-3h41.3a1.5 1.5 0 0 1 0 3zm0 10.02h-41.3a1.5 1.5 0 0 1 0-3h41.3a1.5 1.5 0 0 1 0 3zm0 10.01h-41.3a1.5 1.5 0 0 1 0-3h41.3a1.5 1.5 0 0 1 0 3z"></path>
    </SvgIcon>
  );
};

export default Category;
