import React, { useCallback, useState } from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import {
  Card,
  Tab,
  Table,
  TableBody,
  TableContainer,
  Tabs,
} from "@mui/material";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import { alpha } from "@mui/material/styles";
import Label from "@/components/label";
import Scrollbar from "@/components/scrollbar";
import { ITicketItem, ITicketTableFilters } from "@/@types/ticket";
import { IOrderTableFilterValue } from "@/@types/order";
import TicketTableToolbar from "../TicketTableToolbar";
import TicketTableRow from "../TicketTableRow";
import { _tickets } from "@/@mockup/_ticket";
import { useRouter } from "next/router";

const TICKET_TYPE_OPTIONS = [
  { value: "normal", label: "Normal" },
  { value: "urgent", label: "Urgent" },
];

const TYPE_OPTIONS = [{ value: "all", label: "All" }, ...TICKET_TYPE_OPTIONS];

const TABLE_HEAD = [
  { id: "number", label: "Ticket Number", align: "center" },
  { id: "information", label: "Information", align: "center" },
  { id: "type", label: "Type", width: 116 },
  { id: "createAt", label: "Ticket Date", width: 140 },
  { id: "title", label: "Problem Title", align: "center" },
  { id: "", width: 88 },
];

const defaultFilters: ITicketTableFilters = {
  name: "",
  type: "all",
};

type Props = {};

export default function TicketListView(props: Props) {
  const router = useRouter();

  const table = useTable();

  const [tableData, setTableData] = useState<ITicketItem[]>(_tickets);

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
      handleFilters("type", newValue);
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

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(PATH_ADMIN_DASHBOARD.order.details(id));
    },
    [router]
  );

  return (
    <>
      <CustomBreadCrumbs
        heading="Ticket List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          {
            name: "Ticket",
            href: PATH_ADMIN_DASHBOARD.ticket.root,
          },
          { name: "Ticket List" },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Card>
        <Tabs
          value={filters.type}
          onChange={handleFilterStatus}
          sx={{
            px: 2.5,
            boxShadow: (theme) =>
              `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {TYPE_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              iconPosition="end"
              value={tab.value}
              label={tab.label}
              icon={
                <Label
                  variant={
                    ((tab.value === "all" || tab.value === filters.type) &&
                      "filled") ||
                    "soft"
                  }
                  color={
                    (tab.value === "normal" && "success") ||
                    (tab.value === "urgent" && "error") ||
                    "default"
                  }
                >
                  {tab.value === "all" && tableData.length}
                  {tab.value === "normal" &&
                    tableData.filter((ticket) => ticket.type === "normal")
                      .length}

                  {tab.value === "urgent" &&
                    tableData.filter((ticket) => ticket.type === "urgent")
                      .length}
                </Label>
              }
            />
          ))}
        </Tabs>

        <TicketTableToolbar />

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
                    <TicketTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                      onViewRow={() => handleViewRow(row.id)}
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
  inputData: ITicketItem[];
  comparator: (a: any, b: any) => number;
  filters: ITicketTableFilters;
}) {
  const {} = filters;

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
