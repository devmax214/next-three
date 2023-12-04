import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ISizeItem } from "@/@types/product";
import { editSize, saveSize } from "@/services/product";
import { useEffect } from "react";

const SizeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

type Props = {
  currentSize: ISizeItem | null;
  onCreate: (value: ISizeItem) => void;
  onEdit: (value: ISizeItem) => void;
};

export default function SizeForm({ currentSize, onCreate, onEdit }: Props) {
  const isEdit = Boolean(currentSize);

  const defaultValues = {
    name: currentSize?.name || "",
    description: currentSize?.description || "",
  };

  const methods = useForm({
    resolver: yupResolver(SizeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset({ ...currentSize });
  }, [currentSize]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
        const res = await editSize({ ...currentSize, ...data });
        onEdit(res.data);
      } else {
        const res = await saveSize(data);
        onCreate(res.data);
      }
    } catch (e) {}
  });

  const renderHead = <></>;

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="name" label="name" />

      <RHFTextField name="description" label="description" multiline rows={5} />

      <LoadingButton type="submit" variant="contained">
        {isEdit ? "Edit" : "Save"}
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
