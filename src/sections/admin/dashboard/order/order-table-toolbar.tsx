import React, { useCallback } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IOrderTableFilters, IOrderTableFilterValue } from "@/@types/order";
import Iconify from "@/components/iconify";

type Props = {
  filters: IOrderTableFilters;
  onFilters: (name: string, value: IOrderTableFilterValue) => void;
};

export default function OrderTableToolbar({ filters, onFilters }: Props) {
  const handleFilterName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilters("name", event.target.value);
    },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue: Date | null) => {
      onFilters("startDate", newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue: Date | null) => {
      onFilters("endDate", newValue);
    },
    [onFilters]
  );

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: "flex-end", md: "center" }}
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        p: 2.5,
        pr: { xs: 2.5, md: 1 },
      }}
    >
      <DatePicker
        label="Start date"
        value={filters.startDate}
        onChange={handleFilterStartDate}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
          },
        }}
        sx={{
          maxWidth: { md: 200 },
        }}
      />

      <DatePicker
        label="End date"
        value={filters.endDate}
        onChange={handleFilterEndDate}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
          },
        }}
        sx={{
          maxWidth: { md: 200 },
        }}
      />

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        flexGrow={1}
        sx={{ width: 1 }}
      >
        <TextField
          size="small"
          fullWidth
          value={filters.name}
          onChange={handleFilterName}
          placeholder="Search customer or order number..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}
