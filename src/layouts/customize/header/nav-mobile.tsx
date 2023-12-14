import { Drawer, Grid, IconButton, Link, Box, MenuItem } from "@mui/material";
import SvgColor from "@/components/svg-color";
import { useBoolean } from "@/hooks";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import Logo from "@/components/logo";
import { secondaryFont } from "@/theme/typography";
import { allLangs, useLocales } from "@/locales";
import React, { useCallback } from "react";
import { navConfig } from "./config-navigation";
import { _caches } from "@/@mockup/others";

type Props = {
  offsetTop: boolean;
};

export default function NavMobile({ offsetTop }: Props) {
  const nav = useBoolean();
  const locales = useLocales();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
    },
    [locales]
  );
  return (
    <>
      {!nav.value ?
        <IconButton
          onClick={nav.onTrue}
          sx={{
            ...(offsetTop && {
              color: "text.primary",
            }),
          }}
        >
          <SvgColor src="/icons/ic_hamboger.svg" />
        </IconButton>
        :
        <IconButton
          onClick={nav.onFalse}
          sx={{
            ...(offsetTop && {
              color: "text.primary",
            }),
          }}
        >
          <SvgColor src="/icons/ic_hamboger.svg" />
        </IconButton>
      }
      <Drawer
        open={nav.value}
        anchor="top"
        className="mobile-menu"
        onClose={nav.onFalse}
        PaperProps={{
          sx: {
            padding: "50px 20px",
            top: "64px"
          },
        }}
      >
        <Scrollbar>
          <Box component="div" sx={{ mt: 2, mb: "50px" }}>
            {navConfig.map((m) => (
              <Link
                key={m.path}
                href={m.path}
                rel="noopener"
                underline="none"
                sx={{ display: "table", color: "black", padding: "8px 30px" }}
              >
                {m.title}
              </Link>
            ))}
          </Box>

          <Grid container>
            <Grid xs={4}
              md={4}>
              {_caches.map((language, index) => (
                <Link
                  key={index}
                  sx={{ display: "table", color: index === 1 ? "black" : "grey", padding: "5px 30px", fontSize: 14 }}
                  underline="none"
                  href="javascript:;"
                >
                  {language.label}
                </Link>
              ))}
            </Grid>
            <Grid xs={2}
              md={2}>
              {allLangs.map((language, index) => (
                <Link
                  key={index}
                  sx={{ display: "table", color: language.value === locales.currentLang.value ? "black" : "grey", padding: "5px 30px", fontSize: 14 }}
                  underline="none"
                  onClick={() => handleChangeLang(language.value)}
                  href="javascript:;"
                >
                  {language.label}
                </Link>
              ))}
            </Grid>
          </Grid>
        </Scrollbar>
      </Drawer>
    </>
  );
}
