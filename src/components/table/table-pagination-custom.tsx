import { SxProps, Theme } from "@mui/material/styles";
import { Box, TablePagination, TablePaginationProps } from "@mui/material";

type Props = {
  dense?: boolean;
  onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export default function TablePaginationCustom({
  dense,
  onChangeDense,
  rowsPerPageOptions = [5, 10, 25],
  sx,
  ...other
}: Props & TablePaginationProps) {
  return (
    <Box component="div" sx={{ position: "relative", ...sx }}>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        {...other}
        sx={{
          borderTopColor: "transparent",
        }}
      />

      {/*{onChangeDense && (*/}
      {/*  <FormControlLabel*/}
      {/*    label="Dense"*/}
      {/*    control={<Switch checked={dense} onChange={onChangeDense} />}*/}
      {/*    sx={{*/}
      {/*      pl: 2,*/}
      {/*      py: 1.5,*/}
      {/*      top: 0,*/}
      {/*      position: {*/}
      {/*        sm: "absolute",*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </Box>
  );
}
