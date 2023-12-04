import React, { useCallback, useState } from "react";

import { useRouter } from "next/router";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { Button, Card, Table, TableBody, TableContainer } from "@mui/material";
import RouterLink from "@/routers/components/RouterLink";
import Iconify from "@/components/iconify";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import Scrollbar from "@/components/scrollbar";
import ReviewTableToolbar from "../ReviewTableToolbar";
import ReviewTableRow from "../ReviewTableRow";
import { _review } from "@/@mockup/_review";
import {
  IReviewItem,
  IReviewTableFilters,
  IReviewTableFilterValues,
} from "@/@types/review";

const TABLE_HEAD = [
  { id: "product", label: "Product", align: "center" },
  { id: "createAt", label: "Created At" },
  { id: "customer", label: "Customer" },
  { id: "comment", label: "Comment" },
  { id: "rating", label: "Rating", align: "center", width: 140 },
  { id: "", width: 88 },
];

const defaultFilters: IReviewTableFilters = {};

type Props = {};

export default function ReviewListView(props: Props) {
  const router = useRouter();

  const table = useTable();

  const [tableData, setTableData] = useState<IReviewItem[]>(_review);

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
    (name: string, value: IReviewTableFilterValues) => {
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
        heading="List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          {
            name: "Ticket",
            href: PATH_ADMIN_DASHBOARD.ticket.root,
          },
          { name: "List" },
        ]}
        action={
          <Button
            component={RouterLink}
            href={PATH_ADMIN_DASHBOARD.ticket.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Ticket
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Card>
        <ReviewTableToolbar />

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
                    <ReviewTableRow
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
  inputData: IReviewItem[];
  comparator: (a: any, b: any) => number;
  filters: IReviewTableFilters;
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
