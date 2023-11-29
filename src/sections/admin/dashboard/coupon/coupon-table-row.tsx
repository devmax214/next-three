import { Checkbox, TableCell, TableRow } from "@mui/material";
import { ICouponItem } from "@/@types/coupon";
import Label from "@/components/label";

type Props = {
  selected: boolean;
  row: ICouponItem;
  onSelectRow: VoidFunction;
};

export default function CouponTableRow({ selected, row, onSelectRow }: Props) {
  const status = "active";

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>AXXQT-2547</TableCell>

      <TableCell>Percentage / Fixed Amount</TableCell>

      <TableCell>$18.00 / 20%</TableCell>

      <TableCell></TableCell>

      <TableCell></TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (status === "active" && "success") ||
            (status === "used" && "warning") ||
            (status === "inactive" && "error") ||
            "default"
          }
        >
          {status}
        </Label>
      </TableCell>

      <TableCell></TableCell>
    </TableRow>
  );
}
