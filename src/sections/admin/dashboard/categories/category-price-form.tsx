import { useMemo } from "react";
import { Avatar, Grid, ListItemText, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/hook-form";
import PriceDetails from "./price-details";
import ArtworkDetails from "./artwork-details";
import { ICategoryItem } from "@/@types/product";
import { updateCategory } from "@/services/category";

const CategoryPriceSchema = Yup.object().shape({
  items: Yup.array(
    Yup.object({
      item: Yup.number().required("Item Count is required"),
      price: Yup.number().required("Item Price is required"),
    })
  ),
  artworks: Yup.array(
    Yup.object({
      name: Yup.string().required("Artwork Name is required"),
      price: Yup.number().required("Artwork Price is required"),
    })
  ),
});

type Props = { currentCategory: ICategoryItem };

export default function CategoryPriceForm({ currentCategory }: Props) {
  const defaultValues = useMemo(
    () => ({
      items: currentCategory?.items || [],
      artworks: currentCategory?.artworks || [],
    }),
    [currentCategory]
  );

  const methods = useForm({
    resolver: yupResolver(CategoryPriceSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const handleSave = handleSubmit(async (data) => {
    await updateCategory({ ...currentCategory, ...data });
  });

  return (
    <FormProvider methods={methods}>
      <Grid container spacing={5}>
        <Grid item md={12}>
          <Stack direction="row" gap={1}>
            <Avatar src={`/uploads/${currentCategory.image}`} sx={{ mr: 2 }} />

            <ListItemText
              primary={currentCategory.name}
              secondary={currentCategory.description}
              primaryTypographyProps={{ typography: "body2" }}
              secondaryTypographyProps={{
                component: "span",
                color: "text.disabled",
              }}
            />
          </Stack>
        </Grid>

        <Grid item md={6}>
          <PriceDetails />
        </Grid>

        <Grid item md={6}>
          <ArtworkDetails />
        </Grid>

        <Grid item md={12}>
          <LoadingButton size="large" variant="contained" onClick={handleSave}>
            Save
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
