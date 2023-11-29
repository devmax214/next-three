import { useState } from "react";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { Card, Stack } from "@mui/material";
import ColorForm from "../color-form";
import ColorList from "../color-list";
import { IColorItem } from "@/@types/product";

type Props = {
  colors: IColorItem[];
};

export default function ColorView({ colors }: Props) {
  const [colorList, setColorList] = useState(colors);

  const [editColor, setEditorColor] = useState<IColorItem | null>(null);

  const onEditColor = async (id: string) => {
    setEditorColor(colorList.find((c) => c._id === id) || null);
  };

  const onDeleteColor = async (id: string) => {};

  return (
    <>
      <CustomBreadCrumbs
        heading="Colors"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.root,
          },
          {
            name: "Attributes",
            href: PATH_ADMIN_DASHBOARD.attributes.root,
          },
          { name: "Colors" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack direction="row" gap={2} sx={{ width: 1 }}>
        <Card sx={{ p: 2, width: 350 }}>
          <ColorForm
            currentColor={editColor}
            onCreate={(value: IColorItem) => {
              setColorList([...colorList, value]);
            }}
            onEdit={(value: IColorItem) => {
              setColorList(
                colorList.map((color) =>
                  color._id === value._id ? value : color
                )
              );
            }}
          />
        </Card>

        <Card sx={{ p: 2, width: 1 }}>
          <ColorList
            colors={colorList}
            onEdit={onEditColor}
            onDelete={onDeleteColor}
          />
        </Card>
      </Stack>
    </>
  );
}
