import Markdown from "@/components/mark-down";
import { secondaryFont } from "@/theme/typography";

type Props = { description: string };

export default function ProductDetailsDescription({ description }: Props) {
  return (
    <Markdown
      children={description}
      sx={{
        p: 3,
        "& p, li, ol": {
          // typography: "body2",
          fontSize: { xs: 13, md: 14 },
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        },
        "& ol": {
          p: 0,
          display: { md: "flex" },
          listStyleType: "none",
          "& li": {
            "&:first-of-type": {
              minWidth: 240,
              mb: { xs: 0.5, md: 0 },
            },
          },
        },
      }}
    />
  );
}
