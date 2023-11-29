import React, { forwardRef } from "react";
import { NavItemDesktopProps } from "./types";
import { Link } from "@mui/material";
import { RouterLink } from "@/routers/components";
import { ListItem } from "./styles";
import { useLocales } from "@/locales";
import SvgColor from "@/components/svg-color";
import { secondaryFont } from "@/theme/typography";

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, offsetTop, ...others }, ref) => {
    const { t } = useLocales();

    const { title, path, children, underline } = item;

    const renderContent = (
      <ListItem
        ref={ref}
        {...others}
        disableRipple
        offsetTop={offsetTop}
        sx={{
          textTransform: "uppercase",
          fontSize: 14,
          fontWeight: 500,
          fontFamily: secondaryFont.style.fontFamily,
          ...(underline && {
            textDecoration: "underline dashed",
            textUnderlinePosition: "under",
          }),
        }}
      >
        {t(title)}

        {children && (
          <SvgColor src="/icons/arrow-bottom.svg" sx={{ width: 10, ml: 1 }} />
        )}
      </ListItem>
    );

    if (children) {
      return renderContent;
    }

    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);
