import { Card, Stack } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CategoryList from "../category-list";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { ICategoryItem } from "@/@types/product";
import { useState } from "react";

type Props = {
  categories: ICategoryItem[];
};

export default function CategoryView({ categories }: Props) {
  const [categoryList, setCategoryList] = useState(categories);

  return (
    <>
      <CustomBreadCrumbs
        heading="Categories"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Categories",
            href: PATH_ADMIN_DASHBOARD.categories.root,
          },
          { name: "List" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack direction="row" gap={2} sx={{ width: 1 }}>
        {/*<Card sx={{ p: 2, width: 450 }}>*/}
        {/*  <CategoryForm*/}
        {/*    onCreate={(value: ICategoryItem) => {*/}
        {/*      setCategoryList([...categoryList, value]);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Card>*/}

        <Card sx={{ p: 2, width: 1 }}>
          <CategoryList categories={categoryList} />
        </Card>
      </Stack>
    </>
  );
}
