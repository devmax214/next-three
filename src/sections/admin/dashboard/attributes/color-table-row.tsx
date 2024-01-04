import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { RouterLink } from "@/routers/components";
import EditIcon from "@/components/icons/icon-edit";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import { PATH_SHOP } from "@/routers/path";
import ColorReview from "./color-review";
import { IColorItem } from "@/@types/product";

type Props = {
  index: number;
  data: IColorItem;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
};

export default function ColorTableRow({
  index,
  data,
  onEdit,
  onDelete,
}: Props) {
  const { name, description, color } = data;

  return (
    <>
      <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
        <TableCell width={30}>{index + 1}. </TableCell>

        <TableCell>{name}</TableCell>

        <TableCell>
          <ColorReview color={color} />
        </TableCell>

        <TableCell>{description}</TableCell>

        <TableCell width={50}>
          <Button
            // component={RouterLink}
            // href={PATH_SHOP.customer.address.edit("1111")}
            startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
            onClick={onEdit}
          >
            Edit
          </Button>
        </TableCell>

        <TableCell width={50}>
          <Button
            startIcon={<CartDeleteIcon sx={{ width: 13.4, height: 16 }} />}
            onClick={onDelete}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
