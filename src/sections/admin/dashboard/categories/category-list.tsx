import { Table, TableBody, TableContainer } from "@mui/material";
import { getComparator, TableHeadCustom, useTable } from "@/components/table";
import { useState } from "react";
import { ICategoryItem, ICategoryTableFilters } from "@/@types/product";
import CategoryTableRow from "./category-table-row";

const TABLE_HEAD = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  { id: "image", label: "Image" },
  { id: "description", label: "Description" },
  { id: "edit" },
  { id: "delete" },
];

const defaultFilters: ICategoryTableFilters = {
  name: "",
};

type Props = {
  categories: ICategoryItem[];
};

export default function CategoryList({ categories }: Props) {
  const table = useTable();

  const [tableData, setTableData] = useState<ICategoryItem[]>([]);

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} rowCount={tableData.length} />

        <TableBody sx={{ borderTop: "1px solid #ACB1B8" }}>
          {categories.map((category, i) => (
            <CategoryTableRow key={i} data={category} index={i + 1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function applyFilter({
  inputData,
  comparator,
  filters,
}: {
  inputData: ICategoryItem[];
  comparator: (a: any, b: any) => number;
  filters: ICategoryTableFilters;
}) {
  // const { name, status, role } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  // if (name) {
  //     inputData = inputData.filter(
  //         (user) => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  //     );
  // }
  //
  // if (status !== 'all') {
  //     inputData = inputData.filter((user) => user.status === status);
  // }
  //
  // if (role.length) {
  //     inputData = inputData.filter((user) => role.includes(user.role));
  // }

  return inputData;
}
