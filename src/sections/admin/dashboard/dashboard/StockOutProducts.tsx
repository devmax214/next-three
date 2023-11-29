import {
  Card,
  CardHeader,
  CardProps,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import { TableHeadCustom } from "@/components/table";
import TableCell from "@mui/material/TableCell";

type RowProps = {
  id: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  tableData: RowProps[];
  tableLabels: any;
}

export default function StockOutProducts({
  title,
  subheader,
  tableData,
  tableLabels,
  ...other
}: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        <Scrollbar>
          <Table sx={{ minWidth: 640 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <StockOutProductsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}

function StockOutProductsRow({ row }: { row: RowProps }) {
  return (
    <TableRow>
      <TableCell>Nike Shoes</TableCell>
      <TableCell>00</TableCell>
      <TableCell>$255.25</TableCell>
    </TableRow>
  );
}
