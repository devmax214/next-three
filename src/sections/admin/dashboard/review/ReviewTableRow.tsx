import { IReviewItem } from "@/@types/review";
import {
  Avatar,
  Checkbox,
  IconButton,
  Rating,
  TableCell,
  TableRow,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { format } from "date-fns";
import Iconify from "@/components/iconify";
import { usePopover } from "@/components/custom-popover";

type Props = {
  row: IReviewItem;
  selected: boolean;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function ReviewTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  const popover = usePopover();

  const { product, customer, createdAt, comment, rating } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={product.name} src={product.coverUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={product.name}
          secondary={product.price}
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

      <TableCell>{comment}</TableCell>

      <TableCell>
        <Rating readOnly value={rating} color="warning" />
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
  );
}
