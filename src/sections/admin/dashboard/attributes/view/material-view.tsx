import { useState } from "react";
import { Card, Stack } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import MaterialForm from "../material-form";
import MaterialList from "../material-list";
import { IMaterialItem } from "@/@types/product";

type Props = {
  materials: IMaterialItem[];
};

export default function MaterialView({ materials }: Props) {
  const [materialList, setMaterialList] = useState(materials);

  const [editMaterial, setEditMaterial] = useState<IMaterialItem | null>(null);

  const onEditMaterial = (id: string) => {
    setEditMaterial(materialList.find((c) => c._id === id) || null);
  };

  const onDeleteMaterial = (id: string) => {};

  return (
    <>
      <CustomBreadCrumbs
        heading="Material"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Attributes",
            href: PATH_ADMIN_DASHBOARD.categories.root,
          },
          { name: "List" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack direction="row" gap={2} sx={{ width: 1 }}>
        <Card sx={{ p: 2, width: 350 }}>
          <MaterialForm
            currentMaterial={editMaterial}
            onCreate={(value: IMaterialItem) => {
              setMaterialList([...materialList, value]);
            }}
            onEdit={(value: IMaterialItem) => {
              setMaterialList(
                materialList.map((color) =>
                  color._id === value._id ? value : color
                )
              );
            }}
          />
        </Card>

        <Card sx={{ p: 2, width: 1 }}>
          <MaterialList
            materials={materialList}
            onEdit={onEditMaterial}
            onDelete={onDeleteMaterial}
          />
        </Card>
      </Stack>
    </>
  );
}
