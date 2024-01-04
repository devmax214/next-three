import { Button, TableCell, TableRow } from "@mui/material";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import React from "react";
import { RouterLink } from "@/routers/components";
import { PATH_CONFIGURATOR } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import { secondaryFont } from "@/theme/typography";

type Props = {
  title: string;
  productType: string;
  content: any;
};

export default function ConfigurationPropertyRow(props: Props) {
  return (
    <TableRow sx={{ borderBottom: "1px solid #ACB1B8", pt: 2 }}>
      <TableCell sx={{ color: "#ACB1B8", p: 1 }}>{props.title}</TableCell>

      <TableCell sx={{ p: 1 }}>{props.content}</TableCell>

      <TableCell width="40px" sx={{ p: 0 }}>
        <Button
          component={RouterLink}
          href={PATH_CONFIGURATOR.product.create(props.productType)}
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
            <CartDeleteIcon sx={{ width: 11, height: 12, mt: '-2px' }} color="#F05A4A" />
          }
          sx={{ fontSize: 12, color: "#F05A4A" }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow >
  );
}
