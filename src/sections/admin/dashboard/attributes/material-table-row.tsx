import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import EditIcon from "@/components/icons/icon-edit";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import { IMaterialItem } from "@/@types/product";

type Props = {
  index: number;
  data: IMaterialItem;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
};

export default function MaterialTableRow({
  index,
  data,
  onEdit,
  onDelete,
}: Props) {
  const { name, description } = data;

  return (
    <>
      <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
        <TableCell width={30}>{index + 1}. </TableCell>

        <TableCell>{name}</TableCell>

        <TableCell>{description}</TableCell>

        <TableCell width={50}>
          <Button
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
