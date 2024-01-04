import { format } from "date-fns";
import {
  Avatar,
  Box,
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { fCurrency } from "@/utils/formatNumber";
import Label from "@/components/label";
import { usePopover } from "@/components/custom-popover";
import { useBoolean } from "@/hooks";
import { IOrderItem } from "@/@types/order";
import Iconify from "@/components/iconify";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

type Props = {
  row: IOrderItem;
  selected: boolean;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function OrderTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  const popover = usePopover();

  const collapse = useBoolean();

  const {
    _id,
    orderNumber,
    customer,
    createdAt,
    items,
    subTotal,
    status,
    totalPrice,
  } = row;

  const totalQuantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>
        <Box
          component="div"
          onClick={onViewRow}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          #{_id}
        </Box>
      </TableCell>

      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="avatar" src={customer.avatarUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={`${customer.firstname} ${customer.lastname}`}
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

      <TableCell align="center">{totalQuantity}</TableCell>

      <TableCell> {fCurrency(totalPrice)} </TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (status === "completed" && "success") ||
            (status === "pending" && "warning") ||
            (status === "cancelled" && "error") ||
            "default"
          }
        >
          {status}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: "nowrap" }}>
        <IconButton
          color={collapse.value ? "inherit" : "default"}
          onClick={collapse.onToggle}
          sx={{
            ...(collapse.value && {
              bgcolor: "action.hover",
            }),
          }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton>

        <IconButton
          color={popover.open ? "inherit" : "default"}
          onClick={popover.onOpen}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: "none" }} colSpan={8}>
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: "background.neutral" }}
        >
          <Stack component={Paper} sx={{ m: 1.5 }}>
            {items.map((item) => (
              <Stack
                key={item._id}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  "&:not(:last-of-type)": {
                    borderBottom: (theme) =>
                      `solid 2px ${theme.palette.background.neutral}`,
                  },
                }}
              >
                <Avatar
                  src={`/uploads/${item.product.images[0]}`}
                  variant="rounded"
                  sx={{ width: 48, height: 48, mr: 2 }}
                />

                <ListItemText
                  primary={item.product.name}
                  secondary={item.product.sku}
                  primaryTypographyProps={{
                    typography: "body2",
                  }}
                  secondaryTypographyProps={{
                    component: "span",
                    color: "text.disabled",
                    mt: 0.5,
                  }}
                />

                <Box component="div">x{item.quantity}</Box>

                <Box component="div" sx={{ width: 110, textAlign: "right" }}>
                  {fCurrency(item.price)}
                </Box>
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {renderSecondary}
    </>
  );
}
