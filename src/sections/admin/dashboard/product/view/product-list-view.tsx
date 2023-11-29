import { useCallback, useState } from "react";
import { Button, Card, Table, TableBody, TableContainer } from "@mui/material";
import RouterLink from "@/routers/components/RouterLink";
import { useRouter } from "next/router";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import Iconify from "@/components/iconify";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import Scrollbar from "@/components/scrollbar";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import ProductTableToolbar from "../product-table-toolbar";
import ProductTableRow from "../product-table-row";
import {
  IProductItem,
  IProductTableFilters,
  IProductTableFilterValue,
} from "@/@types/product";

const TABLE_HEAD = [
  { id: "name", label: "Product" },
  { id: "createdAt", label: "Create at", width: 160 },
  { id: "inventoryType", label: "Stock", width: 160 },
  { id: "price", label: "Price", width: 140 },
  { id: "publish", label: "Publish", width: 110 },
  { id: "", width: 88 },
];

const defaultFilters: IProductTableFilters = {
  name: "",
  publish: [],
  stock: [],
};

type Props = {
  products: IProductItem[];
};

export default function ProductListView({ products }: Props) {
  const router = useRouter();

  const table = useTable();

  const [tableData, setTableData] = useState(products);

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const handleFilters = useCallback(
    (name: string, value: IProductTableFilterValue) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row) => row._id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter(
      (row) => !table.selected.includes(row._id)
    );
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(PATH_ADMIN_DASHBOARD.product.edit(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(PATH_ADMIN_DASHBOARD.product.details(id));
    },
    [router]
  );

  return (
    <>
      <CustomBreadCrumbs
        heading="List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          {
            name: "Product",
            href: PATH_ADMIN_DASHBOARD.product.root,
          },
          { name: "List" },
        ]}
        action={
          <Button
            component={RouterLink}
            href={PATH_ADMIN_DASHBOARD.product.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Product
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Card>
        <ProductTableToolbar filters={filters} onFilters={handleFilters} />

        <TableContainer sx={{ position: "relative", overflow: "unset" }}>
          <Scrollbar>
            <Table
              size={table.dense ? "small" : "medium"}
              sx={{ minWidth: 960 }}
            >
              <TableHeadCustom
                order={table.order}
                orderBy={table.orderBy}
                headLabel={TABLE_HEAD}
                rowCount={tableData.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    tableData.map((row) => row._id)
                  )
                }
              />

              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <ProductTableRow
                      key={row._id}
                      row={row}
                      selected={table.selected.includes(row._id)}
                      onSelectRow={() => table.onSelectRow(row._id)}
                      onDeleteRow={() => handleDeleteRow(row._id)}
                      onEditRow={() => handleEditRow(row._id)}
                      onViewRow={() => handleViewRow(row._id)}
                    />
                  ))}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        <TablePaginationCustom
          count={dataFiltered.length}
          page={table.page}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
          dense={table.dense}
          onChangeDense={table.onChangeDense}
        />
      </Card>
    </>
  );
}

function applyFilter({
  inputData,
  comparator,
  filters,
}: {
  inputData: IProductItem[];
  comparator: (a: any, b: any) => number;
  filters: IProductTableFilters;
}) {
  const { name, stock, publish } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  // if (name) {
  //   inputData = inputData.filter(
  //     (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  //   );
  // }
  //
  // if (stock.length) {
  //   inputData = inputData.filter((product) =>
  //     stock.includes(product.inventoryType)
  //   );
  // }
  //
  // if (publish.length) {
  //   inputData = inputData.filter((product) =>
  //     publish.includes(product.publish)
  //   );
  // }

  return inputData;
}
