import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";

export default function ContactAndShipping() {
  const checkout = useCheckoutContext();

  const address = checkout.billing;

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Contact</Typography>
      </Stack>

      <TableContainer>
        <Table>
          <TableBody>
            <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Contact
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#292F3D",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {checkout.email}
                </Typography>
              </TableCell>
              <TableCell sx={{ px: 0 }}>
                <Button sx={{ color: "#858585" }} onClick={checkout.onBackStep}>
                  Change
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Ship to
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#292F3D",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {`${address?.address}, ${address?.postal} ${address?.city}, ${address?.country}`}
                  {/*Backer street, London, SE1P 2AA, United Kingdom*/}
                </Typography>
              </TableCell>
              <TableCell sx={{ px: 0 }}>
                <Button sx={{ color: "#858585" }} onClick={checkout.onBackStep}>
                  Change
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
