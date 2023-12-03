import React from "react";
import { useRouter } from "next/router";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import EditIcon from "@/components/icons/icon-edit";
import { secondaryFont } from "@/theme/typography";
import { RouterLink } from "@/routers/components";
import { IAddressItem } from "@/@types/customer";
import axios from "axios";
import { PATH_SHOP } from "@/routers/path";
import { endpoints } from "../../../../global-config";

type Props = { index: number; data: IAddressItem };

export default function AddressTableRow({ index, data }: Props) {
  const { push } = useRouter();
  const { _id, address, apartment, country, city, postal } = data;

  const deleteRow = async () => {
    const result = await axios.delete(endpoints.customer.address.list, { data: { id: _id } });
    if (result.data.success) {
      push(PATH_SHOP.customer.address.list);
    }
  }

  return (
    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
      <TableCell width={20}>{index + 1}</TableCell>

      <TableCell>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {`${address} ${apartment}`}
          <br />
          {`${postal}`} {`${city}`}
          <br />
          {`${country}`}
        </Typography>
      </TableCell>

      <TableCell width={50}>
        <Button
          component={RouterLink}
          href={PATH_SHOP.customer.address.edit(_id)}
          startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
        >
          Edit
        </Button>
      </TableCell>

      <TableCell width={50}>
        <Button
          startIcon={<CartDeleteIcon sx={{ width: 13.4, height: 16 }} />}
          onClick={deleteRow}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
