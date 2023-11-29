import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  LinearProgress,
  Link,
  ListItemText,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import { ICategoryItem, IProductItem } from "@/@types/product";
import { format } from "date-fns";
import { fCurrency } from "@/utils/formatNumber";
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { secondaryFont } from "@/theme/typography";

type Props = {
  row: IProductItem;
  selected: boolean;
  onEditRow: VoidFunction;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function ProductTableRow({
  row,
  selected,
  onEditRow,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  const popover = usePopover();

  const {
    name,
    category,
    images,
    coverUrl,
    createdAt,
    available,
    quantity,
    inventoryType,
    price,
    publish,
  } = row;

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={name}
            src={`/uploads/${images[0]}`}
            variant="rounded"
            sx={{ width: 64, height: 64, mr: 2 }}
          />

          <ListItemText
            disableTypography
            primary={
              <Link
                noWrap
                color="inherit"
                variant="subtitle2"
                onClick={onViewRow}
                sx={{
                  cursor: "pointer",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {name}
              </Link>
            }
            secondary={
              <Box
                component="div"
                sx={{
                  typography: "body2",
                  color: "text.disabled",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {(category as ICategoryItem).name}
              </Box>
            }
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(createdAt), "dd MMM yyyy")}
            secondary={format(new Date(createdAt), "p")}
            primaryTypographyProps={{
              typography: "body2",
              noWrap: true,
              fontFamily: secondaryFont.style.fontFamily,
            }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          />
        </TableCell>

        <TableCell sx={{ typography: "caption", color: "text.secondary" }}>
          <LinearProgress
            value={(available * 100) / quantity}
            variant="determinate"
            color={
              (inventoryType === "out of stock" && "error") ||
              (inventoryType === "low stock" && "warning") ||
              "success"
            }
            sx={{ mb: 1, height: 6, maxWidth: 80 }}
          />
          {!!available && available} {inventoryType}
        </TableCell>

        <TableCell>{fCurrency(price)}</TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={(publish === "published" && "info") || "default"}
          >
            {publish}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton
            color={popover.open ? "primary" : "default"}
            onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <MenuItem onClick={() => {}} sx={{ color: "error.main" }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}
