import {
  Avatar,
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import { IRefundRequestItem } from "@/@types/refund";
import ListItemText from "@mui/material/ListItemText";
import { format } from "date-fns";
import { fCurrency } from "@/utils/formatNumber";
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import { usePopover } from "@/components/custom-popover";

type Props = {
  row: IRefundRequestItem;
  selected: boolean;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function RefundTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  const popover = usePopover();

  const { orderNumber, customer, createdAt, item, status } = row;

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="center">{orderNumber}</TableCell>

        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={customer.name} src={customer.avatarUrl} sx={{ mr: 2 }} />

          <ListItemText
            primary={customer.name}
            secondary={customer.email}
            primaryTypographyProps={{ typography: "body2" }}
            secondaryTypographyProps={{
              component: "span",
              color: "text.disabled",
            }}
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(createdAt), "dd MMM yyyy")}
            secondary={format(new Date(createdAt), "p")}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>

        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={item.name} src={item.coverUrl} sx={{ mr: 2 }} />

          <ListItemText
            primary={item.name}
            secondary={item.price}
            primaryTypographyProps={{ typography: "body2" }}
            secondaryTypographyProps={{
              component: "span",
              color: "text.disabled",
            }}
          />
        </TableCell>

        <TableCell> {fCurrency(item.price)} </TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={
              (status === "accepted" && "success") ||
              (status === "pending" && "error") ||
              (status === "processing" && "warning") ||
              "default"
            }
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: "nowrap" }}>
          <IconButton
            color={popover.open ? "inherit" : "default"}
            onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
