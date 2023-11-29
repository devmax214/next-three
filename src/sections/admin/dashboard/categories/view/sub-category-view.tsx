import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";

type Props = {};

export default function SubCategoryView(props: Props) {
  return (
    <>
      <CustomBreadCrumbs
        heading="Sub Categories"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Categories",
            href: PATH_ADMIN_DASHBOARD.categories.root,
          },
          { name: "Sub Categories" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
    </>
  );
}
