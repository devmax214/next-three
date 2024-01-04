import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";

import { IPaymentItem } from "@/@types/customer";

type Props = { data: IPaymentItem; index: number };

export default function PaymentListRow({ data, index }: Props) {
  const { number } = data;

  return (
    <>
      <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
        <TableCell>{index + 1}.</TableCell>
        <TableCell>{number}</TableCell>
        <TableCell width={50}>
          <Button
            component={RouterLink}
            href={"javascript:;"}
            startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
          >
            Edit
          </Button>
        </TableCell>

        <TableCell width={50}>
          <Button
            startIcon={<CartDeleteIcon sx={{ width: 13.4, height: 16 }} />}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
