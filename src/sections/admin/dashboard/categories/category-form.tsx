import { useCallback } from "react";
import { Stack } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField, RhfUpload } from "@/components/hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { ICategoryItem } from "@/@types/product";
import { uploadFile } from "@/services/upload";
import { saveCategory } from "@/services/category";

const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed<any>().nullable().required("Cover is required"),
});

type Props = {
  currentCategory?: ICategoryItem;
  onCreate: (value: ICategoryItem) => void;
};

export default function CategoryForm({ currentCategory, onCreate }: Props) {
  const defaultValues = {
    name: currentCategory?.name || "",
    description: currentCategory?.description || "",
    image: currentCategory?.image || null,
  };

  const methods = useForm({
    resolver: yupResolver(CategorySchema),
    defaultValues,
  });

  const { handleSubmit, reset, setValue, control } = methods;

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("image", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const { data } = await uploadFile(formData.image as File);

      const res = await saveCategory({
        ...formData,
        image: data.path as string,
      });

      onCreate(res.data);

      reset();
    } catch (error) {}
  });

  const renderHead = <></>;

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="name" label="name" />

      <RHFTextField name="description" multiline rows={5} label="description" />

      <RhfUpload name="image" maxSize={3145728} onDrop={handleDrop} />

      <LoadingButton type="submit" variant="contained">
        Save
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
