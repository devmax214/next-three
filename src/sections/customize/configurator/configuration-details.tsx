import { Box, Button, Grid, Stack, Typography, MenuItem, ButtonBase } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SizePicker } from "@/components/size-utils";
import FormProvider, { RhfSelect } from "@/components/hook-form";
import { fCurrency } from "@/utils/formatNumber";
import { useRouter } from "next/router";
import { secondaryFont } from "@/theme/typography";
import { useCustomizeContext } from "@/components/customize/context/customize-context";
import { GENDERS, sizes, embelRenders } from "@/constant/embelConst";

export default function ConfigurationDetails(props: any) {
  const context = useCustomizeContext();
  const dbCtx = props.context;
  const price = 50;
  const priceSale = 80.03;
  const productType = props.type == undefined ? "T-Shirts" : props.type;
  const { renderPeriod, renderPrices, renderMain } = embelRenders(productType, dbCtx);
  const defaultValues = { size: sizes[0] };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, control, setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => { });

  const renderSize = (
    <>
      <Stack>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#5C6166",
            fontSize: 14,
            fontweight: 500,
            fontFamily: secondaryFont.style.fontFamily
          }}>
          SIZE:
        </Typography>

        <Grid container>
          <Grid item md={7}>
            <Controller
              name="size"
              render={({ field }) => {
                return (
                  <SizePicker
                    sizes={sizes}
                    selected={field}
                    onSelectSize={(size: string) => {
                      context.onSizeLabelChange(parseFloat(size))
                      field.onChange(size)
                    }}
                  />
                )
              }
              }
            />
          </Grid>
          <Grid item md={5}>
            <RhfSelect name="gender" value={"man"}>
              {GENDERS.map((gender: any, index: number) => (
                <MenuItem key={index} selected={gender.value === "man"} value={gender.value}>
                  {gender.label}
                </MenuItem>
              ))}
            </RhfSelect>
          </Grid>
        </Grid>


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

  const { push } = useRouter();
  const renderActions = (
    <Stack direction="row" spacing={2}>
      <Button
        size="large"
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#292F3D",
          width: 337,
          height: 40,
          "&:hover": { bgcolor: "#550248" }
        }}
        onClick={async () => {
          localStorage.setItem('productType', props.type);
          localStorage.setItem('context', JSON.stringify(dbCtx));
          push('/quote')
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
          REQUEST FOR QUOTE
        </Typography>
      </Button>
    </Stack >
  );


  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={4}>
        {renderSize}

        {renderPrice}

        {renderMain}

        {renderActions}

        {renderPrices}

        {renderPeriod}
      </Stack>
    </FormProvider>
  );
}
