import { Box, Stack } from "@mui/material";

type Props = {
  color: string;
};

export default function ColorReview({ color }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      <Box
        component="div"
        sx={{
          width: 30,
          height: 30,
          backgroundColor: color,
          borderRadius: "50%",
          mr: 2,
        }}
      />
      {color}
    </Stack>
  );
}
