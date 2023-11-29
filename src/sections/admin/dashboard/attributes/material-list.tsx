import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHeadCustom } from "@/components/table";
import { IMaterialItem } from "@/@types/product";
import MaterialTableRow from "./material-table-row";

const TABLE_HEAD = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "edit" },
  { id: "delete" },
];

type Props = {
  materials: IMaterialItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function MaterialList({ materials, onEdit, onDelete }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} rowCount={materials.length} />

        <TableBody sx={{ borderTop: "1px solid #ACB1B8" }}>
          {materials.map((material, index) => (
            <MaterialTableRow
              key={index}
              index={index}
              data={material}
              onEdit={() => onEdit(material._id)}
              onDelete={() => onDelete(material._id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
