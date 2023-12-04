import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import Image from "@/components/image";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@/components/icons/icon-edit";
import React from "react";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import * as styles from './styles';
import CloseIcon from "@/components/icons/icon-close";
import { PATH_CONFIGURATOR } from "@/routers/path";

const sizes = [
  { items: 2, label: "XS" },
  { items: 2, label: "S" },
  { items: 1, label: "M" },
  { items: 3, label: "L" },
  { items: 4, label: "XL" },
];

const prices = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];

type Props = {};

export default function OrderDetail(props: Props) {
  const [showSummary, setShowSummary] = React.useState(true);
  const router = useRouter();
  const slug: any = router.query.slug;
  console.log(slug)

  const handleShowSummary = () => {
    setShowSummary(false);
  };

  const renderLeft = (
    <>
      <Typography
        sx={{
          mb: 0.5,
          fontSize: 16,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Untitled
        <Typography
          sx={{
            fontSize: 14,
            color: "#5C6166",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Modern T-Shirt
        </Typography>
      </Typography>

      <Stack alignItems="center" gap={2} py={3}>
        <Image src="/images/customize/front.png" sx={{ width: 144 }} />
        <Image src="/images/customize/back.png" sx={{ width: 144 }} />
      </Stack>
    </>
  );

  const renderInfo = (
    <Box component="div" sx={{ bgcolor: "#F9F5EE", p: 2 }}>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Size selection
      </Typography>

      <Box component="div" sx={{
        bgcolor: "#EDE9DC",
        p: 2,
        position: 'relative',
        display: showSummary ? 'block' : 'block',
      }}>
        <Typography
          sx={{
            fontSize: 10,
            color: "#5C6166",
            fontFamily: secondaryFont.style.fontFamily,
            pt: 1,
          }}
        >
          Some damage may occur during the dyeing and post-production of your
          order. A damaged garment will not be shipped or charged on your final
          invoice. To minimize the risk of under-delivery we suggest adding
          extra garments to any sizes that require an exact quantity. Typical
          under-delivery rate is 3-5% in total.
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            width: 8,
            height: 8,
            p: 0,
            cursor: "pointer",
          }}
          onClick={handleShowSummary}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack direction="row" gap={3} my={2}>
        <Stack direction="row" gap={1}>
          {sizes.map((size, index) => (
            <Stack key={index} alignItems="center" justifyContent="center">
              <Typography sx={{ fontSize: 14, color: "#5C6166", fontWeight: 500 }}>
                {size.label}
              </Typography>

              <TextField size="small" type="number" defaultValue={size.items} sx={{ lineHeight: '1rem' }} />
            </Stack>
          ))}
        </Stack>

        <Stack sx={{ flexShrink: 0, pt: 0.3 }} gap={1}>
          <Typography sx={{ fontSize: 12, color: "#292F3D" }}>
            Total items
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#292F3D", fontWeight: 600 }}>
            25
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );

  const renderPrice = (
    <Stack direction="row" gap={2} my={2.5}>
      <TableContainer sx={{ width: 1 }}>
        <Table>
          <TableHead sx={{ px: 2, py: 1 }}>
            <TableCell sx={styles.tableCell(false, false)}>From </TableCell>
            <TableCell sx={styles.tableCell(false, false)}>Price per item </TableCell>
          </TableHead>
          <TableBody>
            {prices.map((price, index) => (
              <TableRow key={index} sx={{}}>
                <TableCell sx={styles.tableCell(index === 0, index !== 0)}>
                  {price.items} items
                </TableCell>
                <TableCell sx={styles.tableCell(index === 0, index !== 0)}>
                  {price.price} &euro;
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack sx={{ flexShrink: 0, pt: 1 }}>
        <Typography sx={{ fontSize: 12, height: 25 }}>Price per item</Typography>{" "}
        <Typography sx={{ fontSize: 14, fontWeight: 600, pt: 1 }}>12,50 &euro;</Typography>
      </Stack>
    </Stack>
  );

  const renderOther = (
    <>
      <Stack alignItems="end" py={2}>
        <Stack>
          <Typography sx={{ fontSize: 12, color: "#292F3D", fontWeight: 500, pb: 1 }}>
            Subtotal
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#292F3D", fontWeight: 600 }}>
            204,50 &euro;
          </Typography>
        </Stack>
      </Stack>

      <Divider />

      <Stack direction="row" gap={4} py={1}>
        <Stack>
          <Typography sx={{ fontSize: 11, color: "#ACB1B8", fontWeight: 500, px: 2 }}>
            Total weight
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#5C6166", fontWeight: 500, px: 2 }}>
            2.7 kg
          </Typography>
        </Stack>

        <Stack>
          <Typography sx={{ fontSize: 11, color: "#ACB1B8", fontWeight: 500, px: 2 }}>
            Load time
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#5C6166", fontWeight: 500, px: 2 }}>
            top 2-4 weeks
          </Typography>
        </Stack>
      </Stack>
    </>
  );

  return (
    <Card sx={{ ...styles.card, width: 730 }}>
      <Grid container spacing={2}>
        <Grid item md={5}>
          {renderLeft}

          <Divider sx={{ borderColor: "#ACB1B8", borderWidth: 1 }} />

          <Stack direction="row" justifyContent="space-between">
            <Button
              sx={{ fontSize: 12, color: "#F05A4A", fontWeight: 500 }}
              startIcon={
                <CartDeleteIcon
                  color="#F05A4A"
                  sx={{ width: 13.4, height: 16 }}
                />
              }
              onClick={() => router.push(PATH_CONFIGURATOR.product.create(slug))}
            >
              Delete
            </Button>

            <Button
              sx={{ fontSize: 12, fontWeight: 500 }}
              startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
              onClick={() => router.push(PATH_CONFIGURATOR.product.create(slug))}
            >
              Edit
            </Button>
          </Stack>
        </Grid>
        <Grid item md={7}>
          {renderInfo}

          {renderPrice}

          <Divider sx={{ borderColor: "#ACB1B8", borderWidth: 1 }} />

          {renderOther}
        </Grid>
      </Grid>
    </Card>
  );
}
