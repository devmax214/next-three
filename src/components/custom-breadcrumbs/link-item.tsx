import { BreadcrumbsLinkProps } from "./types";
import { Box, Link } from "@mui/material";
import RouterLink from "@/routers/components/RouterLink";
import { secondaryFont } from "@/theme/typography";

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
  mode: "dark" | "colored";
};

export default function BreadcrumbsLink({
  link,
  activeLast,
  disabled,
  mode,
}: Props) {
  const { name, href, icon } = link;

  const styles = {
    alignItems: "center",
    color: mode === "colored" ? "#F05A4A" : "#858585",
    fontWeight: 500,
    display: "inline-flex",
    fontSize: {xs: "12px !important"},
    fontFamily: secondaryFont.style.fontFamily,
    ...(disabled &&
      !activeLast && {
        cursor: "default",
        pointerEvents: "none",
        color: "text.disabled",
      }),
  };

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: "inherit",
            "& svg": { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  );

  if (href) {
    return (
      <Link component={RouterLink} href={href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return (
    <Box component="div" sx={styles}>
      {renderContent}
    </Box>
  );
}
