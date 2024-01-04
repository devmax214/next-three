import React from "react";
import { useRouter } from "next/router";
import { Table, TableBody, TableContainer } from "@mui/material";
import {
  TableHeadCustom,
  TablePaginationCustom,
  useTable,
} from "@/components/table";
import OrderTableRow from "../order-table-row";
import { PATH_SHOP } from "@/routers/path";
import { IOrderItem } from "@/@types/order";

const TABLE_HEAD = [
  { id: "id", label: "#" },
  { id: "invoice", label: "Invoice" },
  { id: "date", label: "Date" },
  { id: "payment", label: "Payment" },
  { id: "goods", label: "Goods" },
  { id: "total", label: "Total" },
  { id: "review", label: "Review" },
  { id: "tracking-number", label: "Tracking Number" },
  { id: "tracking", label: "Tracking" },
  { id: "status", label: "Status" },
];

type Props = { orders: IOrderItem[] };

export default function OrderListView({ orders }: Props) {
  const router = useRouter();

  const table = useTable({ defaultOrderBy: "id" });
  return (
    <>
      <TableContainer sx={{
        '@media (min-width: 1500px)': {
          width: 980
        },
        '@media (min-width: 1800px)': {
          width: 1000
        }
      }}>
        <Table>
          <TableHeadCustom
            order={table.order}
            orderBy={table.orderBy}
            headLabel={TABLE_HEAD}
            rowCount={orders.length}
            numSelected={table.selected.length}
            sx={{ borderBottom: "1px solid #ACB1B8" }}
          />

          <TableBody>
            {orders
              .slice(
                table.page * table.rowsPerPage,
                table.page * table.rowsPerPage + table.rowsPerPage
              )
              .map((t, index) => (
                <OrderTableRow
                  key={index}
                  index={index}
                  no={table.page * table.rowsPerPage + index + 1}
                  row={t}
                  onTrackingRow={() =>
                    router.push(PATH_SHOP.customer.order.track("orderId"))
                  }
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePaginationCustom
        count={orders.length}
        page={table.page}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        onRowsPerPageChange={table.onChangeRowsPerPage}
        dense={table.dense}
        onChangeDense={table.onChangeDense}
        sx={{
          '@media (min-width: 1500px)': {
            width: 980
          },
          '@media (min-width: 1800px)': {
            width: 1000
          }
        }}
      />
    </>
  );
}
