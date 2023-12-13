import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { SvgIcon, SvgIconProps } from "@mui/material";

function CheckedIcon(props: SvgIconProps) {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      viewBox="-4 -4 24 24"
    >
      <rect width="16" height="16" rx="3" fill="#333333" />
      <path d="M13.2088 3.94471L7.84738 12.8141C7.65039 13.1395 7.31978 13.3337 6.96216 13.3337C6.6458 13.3337 6.34613 13.1813 6.14079 12.9155L2.84306 8.65986C2.57975 8.3199 2.61463 7.82054 2.92313 7.52294C3.22279 7.23291 3.72632 7.22736 4.03286 7.51134L6.83492 10.106L11.8496 3.00702C12.0991 2.65394 12.6164 2.55861 12.9701 2.80274C13.3375 3.05645 13.4427 3.55834 13.2088 3.94471Z" fill="white" />
    </SvgIcon>
  );
}

export default memo(CheckedIcon);
