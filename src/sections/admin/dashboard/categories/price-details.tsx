import { useFieldArray, useFormContext } from "react-hook-form";
import { Button, Card, Divider, Stack } from "@mui/material";
import Iconify from "@/components/iconify";
import { RHFTextField } from "@/components/hook-form";

type Props = {};

export default function PriceDetails(props: Props) {
  const { control, setValue, watch, resetField } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const handleAdd = () => {
    append({ item: 10, price: 10 });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack gap={2}>
        <Stack
          divider={<Divider flexItem sx={{ borderStyle: "dashed" }} />}
          spacing={3}
        >
          {fields.map((item, index) => (
            <Stack key={index} alignItems="flex-end" spacing={1.5}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                sx={{ width: 1 }}
              >
                <RHFTextField
                  size="small"
                  type="number"
                  name={`items[${index}].item`}
                  InputLabelProps={{ shrink: true }}
                />

                <RHFTextField
                  size="small"
                  type="number"
                  name={`items[${index}].price`}
                  InputLabelProps={{ shrink: true }}
                />

                <Button
                  size="small"
                  color="error"
                  startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row">
          <Button
            size="small"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={handleAdd}
            sx={{ flexShrink: 0 }}
          >
            Add Item Price
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
