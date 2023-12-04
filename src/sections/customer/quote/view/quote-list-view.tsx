import { Table, TableBody, TableContainer } from "@mui/material";
import QuoteTableRow from "@/sections/customer/quote/quote-table-row";

const quotes = [
  {
    seq: "#xc03k92",
    status: "approved",
  },
  {
    seq: "#xc03k92",
    status: "review",
  },
  {
    seq: "#xc03k92",
    status: "contact",
  },
] as IQuoteItem[];

type Props = {};

export default function QuoteListView(props: Props) {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {quotes.map((quote, index) => (
              <QuoteTableRow key={index} data={quote} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
