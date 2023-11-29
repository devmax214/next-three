import React, { useCallback, useState } from "react";
import {
  Card,
  Tab,
  Table,
  TableBody,
  TableContainer,
  Tabs,
} from "@mui/material";
import { useRouter } from "next/router";
import { alpha } from "@mui/material/styles";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import Label from "@/components/label";
import Scrollbar from "@/components/scrollbar";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import {
  IOrderItem,
  IOrderTableFilters,
  IOrderTableFilterValue,
} from "@/@types/order";
import OrderTableToolbar from "../order-table-toolbar";
import OrderTableRow from "../order-table-row";

const defaultFilters: IOrderTableFilters = {
  name: "",
  status: "all",
  startDate: null,
  endDate: null,
};

const ORDER_STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "refunded", label: "Refunded" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  ...ORDER_STATUS_OPTIONS,
];

const TABLE_HEAD = [
  { id: "orderNumber", label: "Order", width: 116 },
  { id: "name", label: "Customer" },
  { id: "createdAt", label: "Date", width: 140 },
  { id: "totalQuantity", label: "Items", width: 120, align: "center" },
  { id: "totalAmount", label: "Price", width: 140 },
  { id: "status", label: "Status", width: 110 },
  { id: "", width: 88 },
];

type Props = { orders: IOrderItem[] };

export default function OrderListView({ orders }: Props) {
  const router = useRouter();

  const table = useTable({ defaultOrderBy: "orderNumber" });

  const [tableData, setTableData] = useState<IOrderItem[]>(orders);

  const [filters, setFilters] = useState(defaultFilters);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const handleFilters = useCallback(
    (name: string, value: IOrderTableFilterValue) => {
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

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(PATH_ADMIN_DASHBOARD.order.details(id));
    },
    [router]
  );

  return (
    <>
      <CustomBreadCrumbs
        heading="List"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Order",
            href: PATH_ADMIN_DASHBOARD.order.root,
          },
          { name: "List" },
        ]}
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
                    (tab.value === "completed" && "success") ||
                    (tab.value === "pending" && "warning") ||
                    (tab.value === "cancelled" && "error") ||
                    "default"
                  }
                >
                  {tab.value === "all" && tableData.length}
                  {tab.value === "completed" &&
                    tableData.filter((order) => order.status === "completed")
                      .length}

                  {tab.value === "pending" &&
                    tableData.filter((order) => order.status === "pending")
                      .length}
                  {tab.value === "cancelled" &&
                    tableData.filter((order) => order.status === "cancelled")
                      .length}
                  {tab.value === "refunded" &&
                    tableData.filter((order) => order.status === "refunded")
                      .length}
                </Label>
              }
            />
          ))}
        </Tabs>

        <OrderTableToolbar filters={filters} onFilters={handleFilters} />

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
                    <OrderTableRow
                      key={row._id}
                      row={row}
                      selected={table.selected.includes(row._id)}
                      onSelectRow={() => table.onSelectRow(row._id)}
                      onDeleteRow={() => handleDeleteRow(row._id)}
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
  dateError,
}: {
  inputData: IOrderItem[];
  comparator: (a: any, b: any) => number;
  filters: IOrderTableFilters;
  dateError: boolean;
}) {
  const { status, name, startDate, endDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  // if (name) {
  //   inputData = inputData.filter(
  //     (order) =>
  //       order.orderNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
  //       order.customer.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
  //       order.customer.email.toLowerCase().indexOf(name.toLowerCase()) !== -1
  //   );
  // }
  //
  // if (status !== "all") {
  //   inputData = inputData.filter((order) => order.status === status);
  // }
  //
  // if (!dateError) {
  //   if (startDate && endDate) {
  //     inputData = inputData.filter(
  //       (order) =>
  //         fTimestamp(order.createdAt) >= fTimestamp(startDate) &&
  //         fTimestamp(order.createdAt) <= fTimestamp(endDate)
  //     );
  //   }
  // }

  return inputData;
}
