import { Table, TableBody, TableContainer } from "@mui/material";
import QuoteTableRow from "@/sections/customer/quote/quote-table-row";
import { ICustomizeItem } from "@/@types/customize";

type Props = { quotes: ICustomizeItem[] };

export default function QuoteListView({ quotes }: Props) {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {quotes.map((quote, index) => (
              <QuoteTableRow key={index} index={index} data={quote} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
