import { useState } from "react";
import { Stack } from "@mui/material";
import PaymentList from "../payment-list";
import AddPaymentForm from "../add-payment-form";
import { IPaymentItem } from "@/@types/customer";
import { useGetPayments } from "@/services/customer";

export default function PaymentListView() {
  const { payments, paymentLoading } = useGetPayments();

  const [editPayment, setEditorPayment] = useState<IPaymentItem | null>(null);

  return (
    <Stack gap={5}>
      <PaymentList payments={payments} />

      <AddPaymentForm currentPayment={editPayment} />
    </Stack>
  );
}
