import { Button, TableCell, TableRow } from "@mui/material";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import React from "react";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";

type Props = {};

export default function ConfigurationPropertyRow(props: Props) {
  return (
    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
      <TableCell sx={{ color: "#ACB1B8" }}>Text</TableCell>

      <TableCell>I'm the coolest man in the world</TableCell>

      <TableCell width="40px" sx={{ p: 0 }}>
        <Button
          component={RouterLink}
          href={PATH_SHOP.customer.address.edit("1111")}
          startIcon={
            <EditIcon sx={{ width: 10, height: 12 }} color="#F05A4A" />
          }
          sx={{ fontSize: 12, color: "#F05A4A" }}
        >
          Edit
        </Button>
      </TableCell>

      <TableCell width="40px" sx={{ p: 0 }}>
        <Button
          startIcon={
            <CartDeleteIcon sx={{ width: 11, height: 12 }} color="#F05A4A" />
          }
          sx={{ fontSize: 12, color: "#F05A4A" }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
