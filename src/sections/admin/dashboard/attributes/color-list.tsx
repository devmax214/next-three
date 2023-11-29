import { useState } from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHeadCustom } from "@/components/table";
import ColorTableRow from "./color-table-row";
import { IColorItem } from "@/@types/product";

const TABLE_HEAD = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  { id: "review", label: "Review" },
  { id: "description", label: "Description" },
  { id: "edit" },
  { id: "delete" },
];

type Props = {
  colors: IColorItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ColorList({ colors, onEdit, onDelete }: Props) {

  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} rowCount={colors.length} />

        <TableBody sx={{ borderTop: "1px solid #ACB1B8" }}>
          {colors.map((color, index) => (
            <ColorTableRow
              key={index}
              index={index}
              data={color}
              onEdit={() => onEdit(color._id)}
              onDelete={() => onDelete(color._id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
