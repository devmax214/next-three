import NextLink from "next/link";
import { Box, Link, ListItemText, Tooltip } from "@mui/material";
import { NavConfigProps, NavItemProps } from "../types";
import { StyledDotIcon, StyledIcon, StyledItem } from "./styles";
import SvgColor from "@/components/svg-color";
import { secondaryFont } from "@/theme/typography";

type Props = NavItemProps & {
  config: NavConfigProps;
};

export default function NavItem({
  item,
  depth,
  open,
  active,
  config,
  isExternalLink,
  ...other
}: Props) {
  const { title, path, icon, info, children, disabled, caption, roles } = item;

  const subItem = depth !== 1;

  const renderContent = (
    <StyledItem
      disableGutters
      depth={depth}
      active={active}
      disabled={disabled}
      config={config}
      {...other}
    >
      {icon && <StyledIcon size={config.iconSize}>{icon}</StyledIcon>}

      {subItem && (
        <StyledIcon size={config.iconSize}>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <ListItemText
        primary={title}
        secondary={
          caption && (
            <Tooltip title={caption} placement="top-start">
              <span>{caption}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          fontSize: active ? 15 : 14,
          fontWeight: active ? 700 : 500,
          fontFamily: secondaryFont.style.fontFamily,
          // typography: "body2",
          // textTransform: "capitalize",
          // fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium",
        }}
        secondaryTypographyProps={{
          noWrap: true,
          fontSize: 13,
          fontFamily: secondaryFont.style.fontFamily,
          // component: "span",
          // typography: "caption",
          // color: "text.disabled",
        }}
      />

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <SvgColor
          src={
            open
              ? `/icons/navbar/ic_arrow_up.svg`
              : `/icons/navbar/ic_arrow_down.svg`
          }
          color="white"
          sx={{ width: "13px", height: "13px" }}
        />
      )}
    </StyledItem>
  );

  const renderItem = () => {
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    if (children) {
      return renderContent;
    }

    return (
      <Link component={NextLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <>{renderItem()}</>;
}
