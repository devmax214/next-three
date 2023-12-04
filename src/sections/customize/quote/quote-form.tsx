import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const QuoteSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  name: Yup.string().required("Name is required"),
});

const defaultValues = {
  name: "",
  email: "",
};

type Props = {};

export default function QuoteForm(props: Props) {
  const methods = useForm({
    resolver: yupResolver(QuoteSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  const renderForm = (
    <Stack gap={6} sx={{ width: 500, alignItems: "center", margin: "auto" }}>
      <Stack gap={2} sx={{ width: 1 }}>
        <RHFTextField fullWidth name="name" placeholder="Your name" />
        <RHFTextField fullWidth name="email" placeholder="Enter your email" />
      </Stack>

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: 242 }}
      >
        SEND
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
