import { useCallback, useMemo } from "react";
import {
  Box,
  Card,
  CardHeader,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, {
  RHFEditor,
  RHFMultiCheckbox,
  RHFMultiSelect,
  RhfSelect,
  RHFTextField,
  RhfUpload,
} from "@/components/hook-form";
import { useResponsive } from "@/hooks";
import {
  ICategoryItem,
  IColorItem,
  IMaterialItem,
  IProductItem,
  ISizeItem,
} from "@/@types/product";
import { PRODUCT_GENDER_OPTIONS } from "@/@mockup/_product";
import { uploadFile } from "@/services/upload";
import { createProduct, editProduct } from "@/services/product";

const NewProductSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  information: Yup.string().required("Description is required"),
  others: Yup.string().required("Additional information is required"),
  images: Yup.array()
    .min(1, "Images is required")
    .required("Image is required"),
  sizes: Yup.array().min(1, "Size is required").required("Size is required"),
  color: Yup.string().required("Color is required"),
  category: Yup.string().required("Category is required"),
  material: Yup.string().required("Material is required"),
  code: Yup.string().required("Code is required"),
  sku: Yup.string().required("Sku is required"),
  // colors: Yup.array().min(1, "Color is required").required("Color required"),
  // materials: Yup.array()
  //   .min(1, "Material is required")
  //   .required("Material is required"),
  price: Yup.number().moreThan(0, "Price should not be $0.00"),
  gender: Yup.array(Yup.string().required("Gender is required"))
    .min(1, "Gender is required")
    .required("Gender is required"),
});

type Props = {
  currentProduct?: IProductItem;
  colors: IColorItem[];
  sizes: ISizeItem[];
  categories: ICategoryItem[];
  materials: IMaterialItem[];
};

export default function ProductNewEditForm({
  currentProduct,
  colors,
  sizes,
  materials,
  categories,
}: Props) {
  const mdUp = useResponsive("up", "md");

  const isEdit = Boolean(currentProduct);

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || "",
      information: currentProduct?.information || "",
      others: currentProduct?.others || "",
      images: currentProduct?.images || [],
      quantity: currentProduct?.quantity || 0,
      sizes: currentProduct?.sizes || [],
      color: currentProduct?.color || "",
      material: currentProduct?.material || "",
      price: currentProduct?.price || 0,
      priceSale: currentProduct?.priceSale || 0,
      gender: currentProduct?.gender || [],
      code: currentProduct?.code || "",
      sku: currentProduct?.sku || "",
      category: (currentProduct?.category as string) || "",
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue("images", [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered =
        values.images && values.images?.filter((file) => file !== inputFile);
      setValue("images", filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue("images", []);
  }, [setValue]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    try {
      if (isEdit) {
        await editProduct({ ...currentProduct, ...data });
      } else {
        // Image Uploading
        const urls = await Promise.all(
          data.images.map(
            (texture, index) =>
              new Promise(async (resolve, reject) => {
                const { data } = await uploadFile(texture as File);
                return resolve(data.path);
              })
          )
        );

        await createProduct({ ...data, images: urls });
      }
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <>
      {mdUp && (
        <Grid item md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="name" label="Product Name" />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Information</Typography>
              <RHFEditor simple name="information" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">
                Additional Information
              </Typography>
              <RHFEditor simple name="others" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Images</Typography>
              <RhfUpload
                multiple
                thumbnail
                name="images"
                maxSize={3145728}
                onDrop={handleDrop}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.info("ON UPLOAD")}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid item md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Properties
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              component="div"
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              <RHFTextField name="code" label="Product Code" />
              <RHFTextField name="sku" label="Product SKU" />

              <RHFTextField
                name="quantity"
                label="Quantity"
                placeholder="0"
                type="number"
                InputLabelProps={{ shrink: true }}
              />

              <RhfSelect
                name="category"
                label="Category"
                InputLabelProps={{ shrink: true }}
              >
                {categories.map((category) => (
                  <MenuItem value={category._id}>
                    <Stack direction="row">
                      <Box
                        component="div"
                        sx={{
                          width: 20,
                          height: 20,
                          background: `url(/uploads/${category.image})`,
                          backgroundSize: "contain",
                          mr: 2,
                        }}
                      />
                      {category.name}
                    </Stack>
                  </MenuItem>
                ))}
              </RhfSelect>

              <RhfSelect name="color" label="Color">
                {colors.map((color) => (
                  <MenuItem value={color._id}>
                    <Stack direction="row">
                      <Box
                        component="div"
                        sx={{
                          width: 20,
                          height: 20,
                          bgcolor: `${color.color}`,
                          mr: 2,
                        }}
                      />
                      {color.name}
                    </Stack>
                  </MenuItem>
                ))}
              </RhfSelect>

              <RhfSelect name="material" label="Material">
                {materials.map((material) => (
                  <MenuItem value={material._id}>{material.name}</MenuItem>
                ))}
              </RhfSelect>
            </Box>

            <RHFMultiSelect
              checkbox
              name="sizes"
              label="Sizes"
              options={sizes.map((size) => ({
                value: size._id,
                label: size.name,
              }))}
            />

            <Stack spacing={1}>
              <Typography variant="subtitle2">Gender</Typography>
              <RHFMultiCheckbox
                row
                name="gender"
                spacing={2}
                options={PRODUCT_GENDER_OPTIONS}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderPricing = (
    <>
      {mdUp && (
        <Grid item md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Pricing
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Price related inputs
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Pricing" />}
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField
              name="price"
              label="Regular Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: "text.disabled" }}>
                      $
                    </Box>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="priceSale"
              label="Sale Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: "text.disabled" }}>
                      $
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderAction = (
    <>
      {mdUp && <Grid item md={4} />}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Publish"
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
        >
          {!currentProduct ? "Create Product" : "Save Changes"}
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderPricing}

        {renderAction}
      </Grid>
    </FormProvider>
  );
}
