import { CustomBreadcrumbsProps } from "./types";
import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import LinkItem from "./link-item";
import { secondaryFont } from "@/theme/typography";

export default function CustomBreadCrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  mode = "colored",
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1].name;

  return (
    <Box component="div" sx={{ ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box component="div" sx={{ flexGrow: 1 }}>
          {/* BREADCRUMBS */}
          {!!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem
                  key={link.name || ""}
                  link={link}
                  activeLast={activeLast}
                  disabled={link.name === lastLink}
                  mode={mode}
                />
              ))}
            </Breadcrumbs>
          )}

          {/* HEADING */}
          {heading && (
            <Typography
              sx={{
                fontSize: { xs: 36, md: 48 },
                fontWeight: 700,
                color: "#292F3D",
              }}
              gutterBottom
            >
              {heading}
            </Typography>
          )}
        </Box>

        {action && (
          <Box component="div" sx={{ flexShrink: 0 }}>
            {action}
          </Box>
        )}
      </Stack>

      {!!moreLink && (
        <Box component="div" sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: "table" }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

function Separator() {
  return (
    // <Box
    //   component="span"
    //   sx={{
    //     width: 4,
    //     height: 4,
    //     borderRadius: "50%",
    //     bgcolor: "text.disabled",
    //   }}
    // />
    <Box component="div">
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 600,
          color: "#ACB1B8",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        /
      </Typography>
    </Box>
  );
}
