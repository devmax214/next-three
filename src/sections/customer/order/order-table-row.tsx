import {
  ButtonBase,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IOrderItem } from "@/@types/order";
import TrackingIcon from "@/components/icons/customer/icon-tracking";
import DeliveryIcon from "@/components/icons/customer/icon-delivery";
import CompleteIcon from "@/components/icons/customer/icon-complete";
import StarIcon from "@/components/icons/customer/icon-star";
import { secondaryFont } from "@/theme/typography";
import ListItemText from "@mui/material/ListItemText";
import { format } from "date-fns";
import { useRouter } from "next/router";

type Props = { no: number, index: number; row: IOrderItem; onTrackingRow: VoidFunction };

export default function OrderTableRow({ no, index, row, onTrackingRow }: Props) {
  const { _id, createdAt, status } = row;
  const { push } = useRouter();

  const renderReview = (
    <ButtonBase onClick={() => {
      push('/user/feedback')
    }} >
      <Stack direction="row" gap={1} alignItems="center">
        <StarIcon sx={{ width: 14, height: 13.5 }} />

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#F05A4A",
            fontFamily: secondaryFont.style.fontFamily,
            ...(status !== "completed" && {
              textDecoration: "underline",
            }),
          }}
        >
          Write review
        </Typography>
      </Stack>
    </ButtonBase>
  );

  const renderTracking = (
    <ButtonBase href="https://www.ups.com/track?loc=en_PT&requester=ST/" target="_blank">
      <Stack direction="row" gap={1} alignItems="center">
        <TrackingIcon sx={{ width: 17, height: 15 }} />

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#F05A4A",
            fontFamily: secondaryFont.style.fontFamily,
            ...(status !== "completed" && {
              textDecoration: "underline",
            }),
          }}
        >
          Tracking
        </Typography>
      </Stack>
    </ButtonBase>
  );

  const renderStatus = (
    <Stack direction="row" gap={1} alignItems="center">
      {status === "completed" && (
        <>
          <CompleteIcon sx={{ width: 16, height: 15 }} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#ACB1B8",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Completed
          </Typography>
        </>
      )}
      {status === "pending" && (
        <>
          <DeliveryIcon sx={{ width: 19, height: 13 }} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#6AB67A",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Delivery
          </Typography>
        </>
      )}
    </Stack>
  );

  return (
    <TableRow sx={{ bgcolor: index % 2 === 0 ? "transparent" : "#EDE9DC" }}>
      <TableCell>{no}</TableCell>

      <TableCell>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#F05A4A",
            cursor: "pointer",
            textDecoration: "underline",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          #{_id}
        </Typography>
      </TableCell>

      <TableCell>
        <ListItemText
          primary={format(new Date(createdAt), "dd MMM yyyy")}
          secondary={format(new Date(createdAt), "p")}
          primaryTypographyProps={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            noWrap: true,
          }}
          secondaryTypographyProps={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        />
      </TableCell>

      <TableCell
        sx={{
          fontSize: 12,
          color: status === "completed" ? "#ACB1B8" : "#292F3D",
        }}
      >
        ****************6422
      </TableCell>

      <TableCell>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: status === "completed" ? "#ACB1B8" : "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            T-shirs red, M
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: status === "completed" ? "#ACB1B8" : "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            1 item
          </Typography>
        </Stack>
      </TableCell>

      <TableCell>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: status === "completed" ? "#ACB1B8" : "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          87,80 {JSON.parse(localStorage.getItem('currency')).value}
        </Typography>
      </TableCell>

      <TableCell>{renderReview}</TableCell>
      <TableCell>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            textAlign: "right",
            color: status === "completed" ? "#ACB1B8" : "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {index + Math.round(Math.random() * 100)}
        </Typography>
      </TableCell>
      <TableCell>{renderTracking}</TableCell>

      <TableCell>{renderStatus}</TableCell>
    </TableRow>
  );
}
