import {
  Card,
  CardHeader,
  CardProps,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import Scrollbar from "@/components/scrollbar";
import { TableHeadCustom } from "@/components/table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Label from "@/components/label";

type RowProps = {
  id: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  tableData: RowProps[];
  tableLabels: any;
}

export default function RecentPurchases({
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
                <RecentPurchasesRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}

function RecentPurchasesRow({ row }: { row: RowProps }) {
  return (
    <TableRow>
      <TableCell>#6d3wedo5</TableCell>
      <TableCell sx={{ display: "flex", alignItems: "center" }}></TableCell>
      <TableCell>Nike Shoes</TableCell>
      <TableCell>
        <Label variant="soft" color="primary">
          Success
        </Label>
      </TableCell>
      <TableCell>$125.25</TableCell>
    </TableRow>
  );
}
