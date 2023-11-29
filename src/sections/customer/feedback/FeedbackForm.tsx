import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";

const FeedbackSchema = Yup.object().shape({
  rating: Yup.number().required("Rating is required"),
  feedback: Yup.string().required("Feedback is required"),
});

const defaultValues = {
  rating: 0,
  feedback: "",
};

type Props = {};

export default function FeedbackForm(props: Props) {
  const methods = useForm({
    resolver: yupResolver(FeedbackSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  const renderHead = (
    <Box>
      <Typography
        sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 700, color: "#292F3D" }}
      >
        Feedback/Rating Women's Light Organic Tee T-Shirt
      </Typography>

      <Box
        sx={{
          width: 100,
          height: 100,
          mt: 2,
          borderRadius: "10px",
          background:
            "linear-gradient(180deg, rgb(211 211 223) 0%, rgba(247,254,255,1) 100%)",
        }}
      >
        <Image src="/images/product/product_1.png" ratio="1/1" />
      </Box>
    </Box>
  );

  const renderForm = (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Please left your rating
        </Typography>

        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Rating
              {...field}
              size="large"
              value={Number(field.value)}
              onChange={(event, newValue) => {
                field.onChange(newValue as number);
              }}
            />
          )}
        />
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Please left your feedback
        </Typography>
        <RHFTextField name="feedback" multiline rows={5} />
      </Box>
    </>
  );

  const renderAction = (
    <>
      <Stack direction="row" gap={3}>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: 200,
            bgcolor: "#292F3D",
            "&:hover": { bgcolor: "#550248" },
          }}
        >
          SUBMIT
        </LoadingButton>

        <Button
          variant="contained"
          size="large"
          sx={{
            width: 200,
            bgcolor: "#ACB1B8",
            "&:hover": { bgcolor: "#550248" },
          }}
        >
          CANCEL
        </Button>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={4}>
        {renderHead}

        {renderForm}

        {renderAction}
      </Stack>
    </FormProvider>
  );
}
