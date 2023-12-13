import {
  Checkbox,
  IconButton,
  ListItemText,
  TableCell,
  TableRow,
} from "@mui/material";
import { ITicketItem } from "@/@types/ticket";
import { format } from "date-fns";
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import { usePopover } from "@/components/custom-popover";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

type Props = {
  row: ITicketItem;
  selected: boolean;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function TicketTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  const popover = usePopover();

  const { title, information, ticketNumber, createdAt, type } = row;

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="center">{ticketNumber}</TableCell>

        <TableCell align="center">{information}</TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={(type === "normal" && "info") || "default"}
          >
            {type}
          </Label>
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(createdAt), "dd MMM yyyy")}
            secondary={format(new Date(createdAt), "p")}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>

        <TableCell align="center">{title}</TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: "nowrap" }}>
          <IconButton
            color={popover.open ? "inherit" : "default"}
            onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
