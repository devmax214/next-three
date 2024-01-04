import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHeadCustom } from "@/components/table";
import { ISizeItem } from "@/@types/product";
import SizeTableRow from "./size-table-row";

const TABLE_HEAD = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "edit" },
  { id: "delete" },
];

type Props = {
  sizes: ISizeItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function SizeList({ sizes, onEdit, onDelete }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} rowCount={sizes.length} />

        <TableBody sx={{ borderTop: "1px solid #ACB1B8" }}>
          {sizes.map((size, index) => (
            <SizeTableRow
              key={index}
              index={index}
              data={size}
              onEdit={() => onEdit(size._id)}
              onDelete={() => onDelete(size._id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
