import { Button, TableCell, TableRow } from "@mui/material";
import Image from "@/components/image";
import { RouterLink } from "@/routers/components";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import React from "react";
import { ICategoryItem } from "@/@types/product";

type Props = {
  data: ICategoryItem;
  index: number;
};

export default function CategoryTableRow({ data, index }: Props) {
  const { _id, name, description, image } = data;

  return (
    <>
      <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
        <TableCell width={30}>{index}. </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>
          <Image src={`/uploads/${image}`} sx={{ width: 60, height: 60 }} />
        </TableCell>
        <TableCell>{description}</TableCell>
        <TableCell width={50}>
          <Button
            component={RouterLink}
            href={PATH_ADMIN_DASHBOARD.categories.edit(_id)}
            startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
          >
            Edit
          </Button>
        </TableCell>

        {/*<TableCell width={50}>*/}
        {/*  <Button*/}
        {/*    startIcon={<CartDeleteIcon sx={{ width: 13.4, height: 16 }} />}*/}
        {/*  >*/}
        {/*    Delete*/}
        {/*  </Button>*/}
        {/*</TableCell>*/}
      </TableRow>
    </>
  );
}
