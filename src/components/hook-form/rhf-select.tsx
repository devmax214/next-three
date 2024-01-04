import React from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
  SxProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Theme } from "@mui/material/styles";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
  PaperPropsSx?: SxProps<Theme>;
};

export function RhfSelect({
  size = "small",
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          size={size}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    maxHeight:
                      typeof maxHeight === "number" ? maxHeight : "unset",
                  }),
                  ...PaperPropsSx,
                },
              },
            },
            sx: { textTransform: "capitalize" },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}

type RHFMultiSelectProps = SelectProps & {
  name: string;
  label?: string;
  chip?: boolean;
  checkbox?: boolean;
  placeholder?: string;
  helperText?: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
};

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: string[]) => {
    const selectedItems = options.filter((item) =>
      selectedIds.includes(item.value)
    );

    if (!selectedItems.length && placeholder) {
      return (
        <Box component="em" sx={{ color: "text.disabled" }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box
          component="div"
          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
        >
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(", ");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={sx}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            labelId={name}
            size="small"
            input={
              <OutlinedInput
                fullWidth
                size="small"
                label={label}
                error={!!error}
              />
            }
            renderValue={renderValues}
            {...other}
          >
            {placeholder && (
              <MenuItem disabled value="">
                <em> {placeholder} </em>
              </MenuItem>
            )}

            {options.map((option) => {
              const selected = field.value.includes(option.value);

              return (
                <MenuItem key={option.value} value={option.value}>
                  {checkbox && (
                    <Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} size="small" disableRipple checked={selected} />
                  )}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
