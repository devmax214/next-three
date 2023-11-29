import React from "react";
import {
  Divider,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { secondaryFont } from "@/theme/typography";

import { IPaymentItem } from "@/@types/customer";
import PaymentListRow from "./payment-list-row";

type Props = { payments: IPaymentItem[] };

export default function PaymentList({ payments }: Props) {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 19,
          fontWeight: 600,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Your cards
      </Typography>

      <Divider />

      <TableContainer>
        <Table>
          <TableBody>
            {payments.map((payment, index) => (
              <PaymentListRow key={index} data={payment} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
