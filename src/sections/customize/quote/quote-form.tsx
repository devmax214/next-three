import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import axios from "axios";
import { endpoints, QUOTE_STATE } from "../../../../global-config";

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

  const onSubmit = handleSubmit(async (data) => {
    await axios.post(endpoints.customize.list, { customizeId: props.query.id, quoteState: QUOTE_STATE.review });
    push('/quote/approved');
  });
  const { push } = useRouter();

  const renderForm = (
    <Stack gap={6} sx={{ width: 500, alignItems: "center", margin: "auto" }}>
      <Stack gap={2} sx={{ width: 1 }}>
        <RHFTextField size="small" fullWidth name="name" placeholder="Your name" />
        <RHFTextField size="small" fullWidth name="email" placeholder="Enter your email" />
      </Stack>

      <LoadingButton
        type="button"
        onClick={onSubmit}
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
