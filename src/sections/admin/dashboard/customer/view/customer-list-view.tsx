import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  Tab,
  Table,
  TableBody,
  TableContainer,
  Tabs,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import Iconify from "@/components/iconify";
import Scrollbar from "@/components/scrollbar";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import { RouterLink } from "@/routers/components";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import {
  ICustomerItem,
  ICustomerTableFilters,
  ICustomerTableFilterValue,
} from "@/@types/customer";
import Label from "@/components/label";
import CustomerTableToolbar from "../customer-table-toolbar";
import CustomerTableRow from "../customer-table-row";

const USER_STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "banned", label: "Banned" },
  { value: "rejected", label: "Rejected" },
];

const STATUS_OPTIONS = [{ value: "all", label: "All" }, ...USER_STATUS_OPTIONS];

const defaultFilters: ICustomerTableFilters = {
  name: "",
  role: [],
  status: "all",
};

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "country", label: "Country", width: 180 },
  { id: "phoneNumber", label: "Phone Number", width: 180 },
  { id: "createdAt", label: "CreatedAt", width: 180 },
  { id: "status", label: "Status", width: 100 },
  { id: "", width: 88 },
];

type Props = {
  customers: ICustomerItem[];
};

export default function CustomerListView({ customers }: Props) {
  const router = useRouter();

  const table = useTable();

  const [tableData, setTableData] = useState(customers);

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
    (name: string, value: ICustomerTableFilterValue) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleFilterStatus = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      handleFilters("status", newValue);
    },
    [handleFilters]
  );

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(PATH_ADMIN_DASHBOARD.customer.edit(id));
    },
    [router]
  );

  return (
    <>
      <CustomBreadCrumbs
        heading="List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          { name: "Customer", href: PATH_ADMIN_DASHBOARD.customer.root },
          { name: "List" },
        ]}
        action={
          <Button
            component={RouterLink}
            href={PATH_ADMIN_DASHBOARD.customer.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New User
          </Button>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card>
        <Tabs
          value={filters.status}
          onChange={handleFilterStatus}
          sx={{
            px: 2.5,
            boxShadow: (theme) =>
              `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              iconPosition="end"
              value={tab.value}
              label={tab.label}
              icon={
                <Label
                  variant={
                    ((tab.value === "all" || tab.value === filters.status) &&
                      "filled") ||
                    "soft"
                  }
                  color={
                    (tab.value === "active" && "success") ||
                    (tab.value === "pending" && "warning") ||
                    (tab.value === "banned" && "error") ||
                    "default"
                  }
                >
                  {tab.value === "all" && tableData.length}
                  {tab.value === "active" &&
                    tableData.filter((user) => user.status === "active").length}

                  {tab.value === "pending" &&
                    tableData.filter((user) => user.status === "pending")
                      .length}
                  {tab.value === "banned" &&
                    tableData.filter((user) => user.status === "banned").length}
                  {tab.value === "rejected" &&
                    tableData.filter((user) => user.status === "rejected")
                      .length}
                </Label>
              }
            />
          ))}
        </Tabs>

        <CustomerTableToolbar filters={filters} onFilters={handleFilters} />

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
                    tableData.map((row) => row.id)
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
                    <CustomerTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
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
          //
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
  inputData: ICustomerItem[];
  comparator: (a: any, b: any) => number;
  filters: ICustomerTableFilters;
}) {
  const { name, status, role } = filters;

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
