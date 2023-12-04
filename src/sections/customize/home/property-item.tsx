import { Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

type Props = {
  title: string;
  value: string;
};

export default function PropertyItem({ title, value }: Props) {
  return (
    <Stack
      direction="row"
      sx={{ borderBottom: "1px solid #EEEEEE", width: 1 }}
      py={2}
    >
      <Typography
        sx={{
          width: 100,
          flexShrink: 0,
          fontSize: 12,
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
