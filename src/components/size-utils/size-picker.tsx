import { forwardRef, useCallback } from "react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { SizePickerProps } from "./types";
import { alpha } from "@mui/material/styles";
import { ISizeItem } from "@/@types/product";

const SizePicker = forwardRef<HTMLDivElement, SizePickerProps>(
  ({ sizes, selected, onSelectSize, ...other }, ref) => {
    // console.log(`sizes: `, sizes);
    // console.log(`selected: `, selected);
    const singleSelect = typeof selected === "object";

    const handleSelect = useCallback(
      (size: ISizeItem) => {
        if (singleSelect) {
          if (size !== selected.value) {
            onSelectSize(size);
          }
        } else {
          const newSelected = selected.includes(size)
            ? selected.filter((value) => value._id !== size._id)
            : [...selected, size];

          onSelectSize(newSelected);
        }
      },
      [onSelectSize, selected, singleSelect]
    );

    return (
      <Stack direction="row" {...other}>
        {sizes.map((size) => {
          const hasSelected = singleSelect
            ? selected.value === size
            : selected.includes(size);

          return (
            <ButtonBase
              key={size}
              sx={{ width: 50, height: 50 }}
              onClick={() => {
                handleSelect(size);
              }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "7px",
                  // border: (theme) => `1px solid red`,
                  ...(hasSelected && {
                    // outline: `solid 2px ${alpha("#F05A4A", 0.8)}`,
                    outline: `solid 2px ${alpha("#858585", 0.8)}`,
                    transition: (theme) =>
                      theme.transitions.create("all", {
                        duration: theme.transitions.duration.shortest,
                      }),
                  }),
                }}
              >
                <Typography variant="subtitle1">{size}</Typography>
              </Stack>
            </ButtonBase>
          );
        })}
      </Stack>
    );
  }
);

export default SizePicker;
