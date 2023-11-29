import { Box, TextField } from "@mui/material";

type Props = {};

export default function SearchInputWithCategory(props: Props) {
  return (
    <Box maxWidth="670px" position="relative" flex="1 1 0">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Searching for..."
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          // endAdornment: categoryDropdown,
          // startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />
    </Box>
  );
}
