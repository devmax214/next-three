import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import ProductNewEditForm from "../product-new-edit-form";
import {
  ICategoryItem,
  IColorItem,
  IMaterialItem,
  IProductItem,
  ISizeItem,
} from "@/@types/product";

type Props = {
  currentProduct: IProductItem;
  categories: ICategoryItem[];
  colors: IColorItem[];
  sizes: ISizeItem[];
  materials: IMaterialItem[];
};

export default function ProductEditView({
  currentProduct,
  categories,
  colors,
  sizes,
  materials,
}: Props) {
  return (
    <>
      <CustomBreadCrumbs
        heading="Create a new product"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.dashboard,
          },
          {
            name: "Product",
            href: PATH_ADMIN_DASHBOARD.product.root,
          },
          { name: "New product" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProductNewEditForm
        currentProduct={currentProduct}
        categories={categories}
        colors={colors}
        sizes={sizes}
        materials={materials}
      />
    </>
  );
}
