import { useCallback, useState } from "react";
import { Card, Stack } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import SizeForm from "../size-form";
import SizeList from "../size-list";
import { ISizeItem } from "@/@types/product";

type Props = {
  sizes: ISizeItem[];
};

export default function SizeView({ sizes }: Props) {
  const [sizeList, setSizeList] = useState(sizes);

  const [editSize, setEditSize] = useState<ISizeItem | null>(null);

  const onEditSize = useCallback((id: string) => {
    setEditSize(sizeList.find((c) => c._id === id) || null);
  }, []);

  const onDeleteSize = useCallback((id: string) => {}, []);

  return (
    <>
      <CustomBreadCrumbs
        heading="Sizes"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Attributes",
            href: PATH_ADMIN_DASHBOARD.categories.root,
          },
          { name: "Sizes" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack direction="row" gap={2} sx={{ width: 1 }}>
        <Card sx={{ p: 2, width: 350 }}>
          <SizeForm
            currentSize={editSize}
            onCreate={(value: ISizeItem) => {
              setSizeList([...sizeList, value]);
            }}
            onEdit={(value: ISizeItem) => {
              setSizeList(
                sizeList.map((size) => (size._id === value._id ? value : size))
              );
            }}
          />
        </Card>

        <Card sx={{ p: 2, width: 1 }}>
          <SizeList
            sizes={sizeList}
            onEdit={onEditSize}
            onDelete={onDeleteSize}
          />
        </Card>
      </Stack>
    </>
  );
}
