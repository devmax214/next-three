import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormProvider, {
  RHFCheckbox,
  RHFTextField,
} from "@/components/hook-form";
import { Button, Stack, Typography } from "@mui/material";

const CouponScheme = Yup.object().shape({
  isPercent: Yup.boolean(),
  amount: Yup.number().required("Amount is required!"),
});

type Props = {};

export default function CouponNewEditForm(props: Props) {
  const defaultValues = {};

  const methods = useForm({
    resolver: yupResolver(CouponScheme),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={2} sx={{ width: 500 }}>
        <RHFCheckbox name="isPercent" label="Use Percent" />

        <Stack>
          <Typography>Amount</Typography>
          <RHFTextField name="amount" type="number" placeholder={10} />
        </Stack>

        <Stack>
          <Typography>Expire Date</Typography>
          <RHFTextField name="amount" type="number" placeholder={10} />
        </Stack>

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
}
