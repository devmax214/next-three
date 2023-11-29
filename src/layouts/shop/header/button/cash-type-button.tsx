import React from "react";
import { MenuItem, Typography } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import SvgColor from "@/components/svg-color";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { _caches } from "@/@mockup/others";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function CashTypeButton(props: Props) {
  const popover = usePopover();

  return (
    <>
      <TouchRipple onClick={popover.onOpen}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          EUR
        </Typography>

        <SvgColor src="/icons/arrow-bottom.svg" sx={{ width: 10, ml: 1 }} />
      </TouchRipple>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-right"
        sx={{ width: 120, px: 2, py: 2 }}
      >
        {_caches.map((language, index) => (
          <MenuItem
            key={index}
            sx={{
              fontSize: 14,
              fontWeight: 500,
              // lineHeight: "26px",
              justifyContent: "center",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            {language.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
