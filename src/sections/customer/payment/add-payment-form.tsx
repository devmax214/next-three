import FormProvider, { RhfSelect, RHFTextField } from "@/components/hook-form";
import { Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { mutate } from "swr";
import LoadingButton from "@mui/lab/LoadingButton";
import { IPaymentItem } from "@/@types/customer";
import { addPayment } from "@/services/customer";
import { months, years } from "@/@mockup/others";
import { endpoints } from "../../../../global-config";

const PaymentSchema = Yup.object().shape({
  number: Yup.string().required("First Name is required"),
  month: Yup.string().required("Month is required"),
  year: Yup.string().required("Yeah is required"),
  holder: Yup.string().required("Holder Name is required"),
  security: Yup.string().required("Security Code is required"),
});

type Props = {
  currentPayment: IPaymentItem | null;
};

export default function AddPaymentForm({ currentPayment }: Props) {
  const isEdit = Boolean(currentPayment);

  const defaultValues = {
    number: "2324-2242-2242-2424",
    month: "12",
    year: "2023",
    holder: "Visa",
    security: "23234234",
  };

  const methods = useForm({
    resolver: yupResolver(PaymentSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
      } else {
        const res = await addPayment(data);

        const URL = endpoints.customer.payment.list;
        await mutate(URL);
      }
    } catch (e) {}
  });

  const renderHead = (
    <>
      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "#292F3D",
        }}
      >
        Add new card
      </Typography>
    </>
  );

  const renderForm = (
    <>
      <Grid container spacing={2} sx={{ width: 500 }}>
        <Grid item md={12}>
          <RHFTextField name="number" placeholder="Add new card" />
        </Grid>
        <Grid item md={6}>
          <RhfSelect native name="month">
            {months.map((month, index) => (
              <option key={index} value={month.value}>
                {month.label}
              </option>
            ))}
          </RhfSelect>
        </Grid>
        <Grid item md={6}>
          <RhfSelect native name="year">
            {years.map((year, index) => (
              <option key={index} value={year.value}>
                {year.label}
              </option>
            ))}
          </RhfSelect>
        </Grid>
        <Grid item md={12}>
          <RHFTextField name="holder" placeholder="Card holder's name" />
        </Grid>
        <Grid item md={12}>
          <RHFTextField
            name="security"
            type="password"
            placeholder="Security code"
          />
        </Grid>
      </Grid>

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: 215 }}
      >
        Add new card
      </LoadingButton>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={2}>
        {renderHead}

        {renderForm}
      </Stack>
    </FormProvider>
  );
}
