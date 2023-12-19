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
import { primaryFont, secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";

type Props = {};

export default function ContactAndShipping(props: Props) {

  const checkout = useCheckoutContext();
  console.log(checkout)

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>Contact</Typography>
      </Stack>

      <TableContainer sx={{ mt: -4 }}>
        <Table>
          <TableBody>
            <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
              <TableCell sx={{ pl: 0, pb: 0.5 }}>
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
              <TableCell sx={{ pb: 0.5 }}>
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
              <TableCell sx={{ px: 0, pb: 0.5 }}>
                <Button onClick={checkout.onBackStep}><Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#F05A4A",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >Change</Typography></Button>
              </TableCell>
            </TableRow>
            {checkout.shippingInclude &&
              <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                <TableCell sx={{ pl: 0, pb: 0.5, pt: 0.5 }}>
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
                <TableCell sx={{ pb: 0.5, pt: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    {`${checkout.billing?.address}, ${checkout.billing?.postal}, ${checkout.billing?.city}, ${checkout.billing?.country}`}
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0, pb: 0.5, pt: 0.5 }}>
                  <Button onClick={checkout.onBackStep}><Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#F05A4A",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >Change</Typography></Button>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer >
    </>
  );
}
