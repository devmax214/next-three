import React, { useCallback } from "react";
import { MenuItem, Typography } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import SvgColor from "@/components/svg-color";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { allLangs, useLocales } from "@/locales";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function LanguageButton(props: Props) {
  const locales = useLocales();

  const popover = usePopover();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
      popover.onClose();
    },
    [locales, popover]
  );

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
          {locales.currentLang.label}
        </Typography>

        <SvgColor src="/icons/arrow-bottom.svg" sx={{ width: 10, ml: 1 }} />
      </TouchRipple>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-right"
        sx={{ width: 100, px: 2, py: 2 }}
      >
        {allLangs.map((language, index) => (
          <MenuItem
            key={index}
            sx={{
              fontSize: 14,
              fontWeight: 500,
              // lineHeight: "26px",
              justifyContent: "center",
              fontFamily: secondaryFont.style.fontFamily,
            }}
            selected={language.value === locales.currentLang.value}
            onClick={() => handleChangeLang(language.value)}
          >
            {language.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
