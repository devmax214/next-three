import { Stack } from "@mui/material";
import * as Yup from "yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { IMaterialItem } from "@/@types/product";
import { editMaterial, saveMaterial } from "@/services/product";
import { useEffect } from "react";

const MaterialSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

type Props = {
  currentMaterial: IMaterialItem | null;
  onCreate: (value: IMaterialItem) => void;
  onEdit: (value: IMaterialItem) => void;
};

export default function MaterialForm({
  currentMaterial,
  onCreate,
  onEdit,
}: Props) {
  const isEdit = Boolean(currentMaterial);

  const defaultValues = {
    name: currentMaterial?.name || "",
    description: currentMaterial?.description || "",
  };

  const methods = useForm({
    resolver: yupResolver(MaterialSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset({ ...currentMaterial });
  }, [currentMaterial]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
        const res = await editMaterial({ ...currentMaterial, ...data });
        onEdit(res.data);
      } else {
        const res = await saveMaterial(data);
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
