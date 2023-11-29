import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import Image from "@/components/image";
import SvgColor from "@/components/svg-color";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SizePicker } from "@/components/size-utils";
import FormProvider, { RhfSelect, RHFTextField } from "@/components/hook-form";
import { fCurrency } from "@/utils/formatNumber";
import ConfigurationPropertyRow from "./configuration-property-row";
import { useBoolean } from "@/hooks";
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";

const sizes = ["XS", "S", "M", "L", "XL"];

const defaultValues = { size: sizes[0] };

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 60,
  transform: "translateX(-50%)",
  width: 1057,
  outline: "none",
}));

type Props = {};

export default function ConfigurationDetails(props: Props) {
  const cart = useBoolean();

  const price = 50.03;

  const priceSale = 80.03;

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, control, setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => { });

  const renderSize = (
    <>
      <Stack>
        <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "#5C6166" }}>
          SIZE:
        </Typography>

        <Controller
          name="size"
          render={({ field }) => (
            <SizePicker
              sizes={sizes}
              selected={field.value}
              onSelectSize={(size) => field.onChange(size as string)}
            />
          )}
        />
      </Stack>
    </>
  );

  const renderPrice = (
    <>
      <Box sx={{ typography: "h4" }}>
        {priceSale && (
          <Box
            component="span"
            sx={{
              color: "text.disabled",
              textDecoration: "line-through",
              mr: 2.5,
              fontWeight: 400,
            }}
          >
            {fCurrency(priceSale)}
          </Box>
        )}

        {fCurrency(price)}
      </Box>
    </>
  );

  const renderProperty = (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <RhfSelect name="material" />
      </Grid>
      <Grid item md={6}>
        <RhfSelect name="material" />
      </Grid>
      <Grid item md={6}>
        <RhfSelect name="material" />
      </Grid>
      <Grid item md={6}>
        <RhfSelect name="material" />
      </Grid>
    </Grid>
  );

  const renderItems = (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <ConfigurationPropertyRow />
            <ConfigurationPropertyRow />
            <ConfigurationPropertyRow />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  const renderActions = (
    <Stack direction="row" spacing={2}>
      <Button
        size="large"
        fullWidth
        variant="contained"
        sx={{ bgcolor: "#F05A4A", "&:hover": { bgcolor: "#6AB67A" } }}
        onClick={() => {
          cart.onTrue();
        }}
      >
        ADD TO CART
      </Button>

      <Button variant="outlined" sx={{ p: 1, minWidth: "auto" }}>
        <SvgColor src="/icons/favorite-off.svg" />
      </Button>
    </Stack>
  );

  const renderModal = (
    <>
      <Modal open={cart.value}>
        <Wrapper>
          <Stack alignItems="end">
            <IconButton
              onClick={() => {
                cart.onFalse();
              }}
            >
              <Iconify
                icon="material-symbols:close"
                width={{ xs: 20, md: 36 }}
                color="#ffffff"
              />
            </IconButton>
          </Stack>
          <Card sx={{ px: 4, py: 6 }}>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Image
                  src="/images/customize/screenshot.jpg"
                  sx={{ width: 1 }}
                />
              </Grid>
              <Grid item md={4}>
                <Stack gap={3}>
                  <RHFTextField name="name" placeholder="Product name" />

                  <LoadingButton fullWidth variant="contained">
                    SAVE
                  </LoadingButton>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Wrapper>
      </Modal>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        {renderSize}

        {renderPrice}

        {renderProperty}

        {renderItems}

        {renderActions}

        {renderModal}
      </Stack>
    </FormProvider>
  );
}
