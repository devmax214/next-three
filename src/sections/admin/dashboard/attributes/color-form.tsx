import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import ControlColorPicker from "./rhf-colorpicker";
import { editColor, saveColor } from "@/services/product";
import { IColorItem } from "@/@types/product";
import { useEffect } from "react";

const ColorSchema = Yup.object().shape({
  color: Yup.string().required("Color is required"),
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

type Props = {
  currentColor: IColorItem | null;
  onCreate: (value: IColorItem) => void;
  onEdit: (value: IColorItem) => void;
};

export default function ColorForm({ currentColor, onCreate, onEdit }: Props) {
  const isEdit = Boolean(currentColor);

  const defaultValues = {
    color: currentColor?.color || "#ffffff",
    name: currentColor?.name || "",
    description: currentColor?.description || "",
  };

  const methods = useForm({
    resolver: yupResolver(ColorSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset({ ...currentColor });
  }, [currentColor]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isEdit) {
        const res = await editColor({ ...currentColor, ...data });
        onEdit(res.data);
      } else {
        const res = await saveColor(data);
        onCreate(res.data);
      }
    } catch (e) {}
  });

  const renderHead = <></>;

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="name" label="name" />

      <Controller
        name="color"
        control={control}
        render={({ field }) => (
          <ControlColorPicker
            value={field.value as string}
            setValue={(color) => field.onChange(color as string)}
          />
        )}
      />

      <RHFTextField name="description" multiline rows={5} label="description" />

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
