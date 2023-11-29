import {
  Box,
  Button,
  Divider,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import AddressTableRow from "../address-table-row";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { IAddressItem } from "@/@types/checkout";

type Props = { addresses: IAddressItem[] };

export default function AddressListView({ addresses }: Props) {
  return (
    <Stack gap={5}>
      <Box component="div">
        <Typography
          sx={{
            fontSize: 19,
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Your addresses
        </Typography>

        <Divider />

        <TableContainer>
          <Table>
            <TableBody>
              {addresses.map((address, index) => (
                <AddressTableRow key={index} data={address} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center">
        <Button
          component={RouterLink}
          href={PATH_SHOP.customer.address.create}
          variant="contained"
          size="large"
          sx={{ width: 220 }}
        >
          Add new address
        </Button>
      </Stack>
    </Stack>
  );
}
