import { Box, ListItemText, Stack, Typography } from "@mui/material";
import FlagIcon from "@/components/icons/customer/icon-flag";
import StoreIcon from "@/components/icons/customer/icon-store";
import { secondaryFont } from "@/theme/typography";

type Props = {
  index: number;
  currentProgress: number;
  data: {
    name: string;
    date: string;
    target?: string;
    line: boolean;
    icon: any;
    orderIcon: any;
  };
};

export default function OrderTrackingItem({
  index,
  currentProgress,
  data,
}: Props) {
  const { name, date, target, line, icon, orderIcon } = data;

  const isPending = currentProgress < index;

  const percentage = Math.min((currentProgress - index) * 100, 100);

  return (
    <Stack gap={3} sx={{ flexGrow: 1 }}>
      <Stack direction="row" gap={2}>
        {orderIcon}

        <ListItemText
          primary={name}
          secondary={date}
          primaryTypographyProps={{
            sx: {
              fontSize: 16,
              fontWeight: 500,
              color: isPending ? "#ACB1B8" : "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            },
          }}
          secondaryTypographyProps={{
            sx: {
              fontSize: 12,
              fontWeight: 500,
              color: isPending ? "#ACB1B8" : "#5C6166",
              fontFamily: secondaryFont.style.fontFamily,
            },
          }}
        />
      </Stack>

      <Stack sx={{ position: "relative", mr: 0.5 }}>
        <Box
          component="div"
          sx={{
            width: 22,
            height: 22,
            bgcolor: isPending ? "#EDE9DC" : "#6AB67A",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {line && (
          <>
            <Box
              component="div"
              sx={{
                width: isPending ? 0 : `${percentage}%`,
                height: 3,
                bgcolor: "#6AB67A",
                position: "absolute",
                transform: "translateY(-1.5px)",
                top: "50%",
                left: 0,
                zIndex: 1,
              }}
            />

            <Box
              component="div"
              sx={{
                width: "100%",
                height: 1,
                position: "absolute",
                top: "50%",
                transform: "translateY(-1px)",
                borderTop: "2px dotted #ACB1B8",
                zIndex: 0,
              }}
            />
          </>
        )}
      </Stack>

      {target && (
        <Stack direction="row" gap={2}>
          {icon}

          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: isPending ? "#ACB1B8" : "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
              maxWidth: 100
            }}
          >
            {target}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
