import React, { useCallback } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import Iconify from "@/components/iconify";
import {
  ICustomerTableFilters,
  ICustomerTableFilterValue,
} from "@/@types/customer";

type Props = {
  filters: ICustomerTableFilters;
  onFilters: (name: string, value: ICustomerTableFilterValue) => void;
};

export default function CustomerTableToolbar({ filters, onFilters }: Props) {
  const handleFilterName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilters("name", event.target.value);
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
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        flexGrow={1}
        sx={{ width: 1 }}
      >
        <TextField
          fullWidth
          value={filters.name}
          onChange={handleFilterName}
          placeholder="Search..."
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
