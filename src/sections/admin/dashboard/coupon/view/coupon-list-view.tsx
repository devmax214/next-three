import React, { useCallback, useState } from "react";
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
import { RouterLink } from "@/routers/components";
import Scrollbar from "@/components/scrollbar";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import Iconify from "@/components/iconify";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import {
  getComparator,
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import Label from "@/components/label";
import {
  ICouponItem,
  ICouponTableFilters,
  ICouponTableFilterValue,
} from "@/@types/coupon";

import CouponTableToolbar from "../coupon-table-toolbar";
import CouponTableRow from "../coupon-table-row";

const COUPON_STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "In Active" },
  { value: "used", label: "Used" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  ...COUPON_STATUS_OPTIONS,
];

const TABLE_HEAD = [
  { id: "code", label: "Coupons Code" },
  { id: "type", label: "Type" },
  { id: "discount", label: "Discount" },
  { id: "startDate", label: "Start Date" },
  { id: "endDate", label: "End Date" },
  { id: "status", label: "Status", width: 110 },
  { id: "", width: 88 },
];

const defaultFilters: ICouponTableFilters = {
  code: "",
  status: "all",
  startDate: null,
  endDate: null,
};

type Props = {
  coupons: ICouponItem[];
};

export default function CouponListView({ coupons }: Props) {
  const [tableData, setTableData] = useState(coupons);

  const table = useTable({ defaultOrderBy: "orderNumber" });

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

  const handleFilters = useCallback(
    (name: string, value: ICouponTableFilterValue) => {
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

  return (
    <>
      <CustomBreadCrumbs
        heading="Coupon List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          { name: "Coupon", href: PATH_ADMIN_DASHBOARD.coupon.list },
          { name: "Coupon List" },
        ]}
        action={
          <Button
            component={RouterLink}
            href={PATH_ADMIN_DASHBOARD.coupon.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Coupon
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
                    (tab.value === "used" && "warning") ||
                    (tab.value === "inactive" && "error") ||
                    "default"
                  }
                >
                  {tab.value === "all" && tableData.length}
                  {tab.value === "active" &&
                    tableData.filter((coupon) => coupon.status === "active")
                      .length}

                  {tab.value === "used" &&
                    tableData.filter((coupon) => coupon.status === "used")
                      .length}
                  {tab.value === "inactive" &&
                    tableData.filter((coupon) => coupon.status === "coupon")
                      .length}
                </Label>
              }
            />
          ))}
        </Tabs>

        <CouponTableToolbar filters={filters} onFilters={handleFilters} />

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
                <CouponTableRow />
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
  inputData: ICouponItem[];
  comparator: (a: any, b: any) => number;
  filters: ICouponTableFilters;
  dateError: boolean;
}) {
  const { status, code, startDate, endDate } = filters;

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
