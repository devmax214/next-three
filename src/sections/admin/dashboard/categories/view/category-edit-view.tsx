import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CategoryPriceForm from "../category-price-form";
import { ICategoryItem } from "@/@types/product";

type Props = {
  currentCategory: ICategoryItem;
};

export default function CategoryEditView({ currentCategory }: Props) {
  return (
    <>
      <CustomBreadCrumbs
        heading="Edit Category"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Categories",
            href: PATH_ADMIN_DASHBOARD.categories.root,
          },
          { name: "Edit Category" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CategoryPriceForm currentCategory={currentCategory} />
    </>
  );
}
