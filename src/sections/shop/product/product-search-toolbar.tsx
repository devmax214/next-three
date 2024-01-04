import React, { useCallback, useState } from "react";
import {
  Autocomplete,
  Button,
  ButtonBase,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { PRODUCT_SIZE_OPTIONS } from "@/@mockup/_product";
import Iconify from "@/components/iconify";
import {
  ICategoryItem,
  IColorItem,
  IMaterialItem,
  ISizeItem,
} from "@/@types/product";
import { secondaryFont } from "@/theme/typography";
import { PATH_SHOP } from "@/routers/path";

type Props = {
  colors: IColorItem[];
  sizes: ISizeItem[];
  categories: ICategoryItem[];
  materials: IMaterialItem[];
};

export default function ProductSearchToolbar({
  colors,
  sizes,
  categories,
  materials,
}: Props) {
  const router = useRouter();

  const [color, setColor] = useState();
  const [searchText, setSearchText] = useState("");

  const submitSearch = useCallback(() => {
    // const path = router.pathname;
    // const query = router.query;
    const query = {} as { [key: string]: string };
    if (searchText) query.search = searchText;

    router.push({
      pathname: PATH_SHOP.product.search,
      query: query,
    });
  }, [searchText, color]);

  const renderOrder = (
    <Stack
      direction="row"
      gap={3}
      mt={2}
      pb={2}
      sx={{ borderBottom: "2px solid #ffffff" }}
    >
      <ButtonBase>
        <Stack mr={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
          >
            <path
              d="M4.71429 0.997991C5.11466 0.489444 5.88534 0.489444 6.28571 0.997991L10.7209 6.63141C11.2373 7.28739 10.7701 8.25 9.93517 8.25H1.06483C0.229947 8.25 -0.237333 7.28739 0.279118 6.63141L4.71429 0.997991Z"
              fill="#858585"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M6.28571 8.00201C5.88534 8.51056 5.11466 8.51056 4.71429 8.00201L0.279119 2.36859C-0.237333 1.71261 0.229947 0.75 1.06483 0.75L9.93517 0.75C10.7701 0.75 11.2373 1.71261 10.7209 2.36859L6.28571 8.00201Z"
              fill="#858585"
            />
          </svg>
        </Stack>
        <Typography
          sx={{
            color: "#292F3D",
            fontSize: 16,
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Lowest price
        </Typography>
      </ButtonBase>

      <ButtonBase>
        <Stack mr={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M6.28571 8.00201C5.88534 8.51056 5.11466 8.51056 4.71429 8.00201L0.279119 2.36859C-0.237333 1.71261 0.229947 0.75 1.06483 0.75L9.93517 0.75C10.7701 0.75 11.2373 1.71261 10.7209 2.36859L6.28571 8.00201Z"
              fill="#858585"
            />
          </svg>
        </Stack>
        <Typography
          sx={{
            color: "#5C6166",
            fontSize: 16,
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Best sold
        </Typography>
      </ButtonBase>
    </Stack>
  );

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <Stack direction="row" gap={2} sx={{ width: 1 }}>
          <Autocomplete
            fullWidth
            size="small"
            renderInput={(params) => (
              <TextField {...params} placeholder="Women" />
            )}
            options={PRODUCT_SIZE_OPTIONS}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                {option.label}
              </li>
            )}
          />

          <Autocomplete
            fullWidth
            size="small"
            renderInput={(params) => (
              <TextField {...params} placeholder="Material" />
            )}
            options={materials.map((material) => ({
              value: material._id,
              label: material.name,
            }))}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                {option.label}
              </li>
            )}
          />
        </Stack>

        <Stack direction="row" gap={2} sx={{ width: 1 }}>
          <Autocomplete
            fullWidth
            size="small"
            renderInput={(params) => (
              <TextField {...params} placeholder="T-Shirts" />
            )}
            options={categories.map((category) => ({
              value: category._id,
              label: category.name,
            }))}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                {option.label}
              </li>
            )}
          />

          <Autocomplete
            size="small"
            fullWidth
            renderInput={(params) => (
              <TextField {...params} placeholder="Size" />
            )}
            options={sizes.map((size) => ({
              value: size._id,
              label: size.name,
            }))}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                {option.label}
              </li>
            )}
          />
        </Stack>

        <Stack direction="row" gap={2} sx={{ width: 1 }}>
          <Autocomplete
            fullWidth
            size="small"
            value={color}
            onChange={(ev, newValue) => setColor(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Color" />
            )}
            options={colors.map((color) => ({
              value: color._id,
              label: color.name,
            }))}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <li {...props} key={option.value}>
                {option.label}
              </li>
            )}
          />

          <TextField
            fullWidth
            size="small"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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

        <Button
          variant="contained"
          sx={{
            bgcolor: "#E6E6E6E6",
            color: "#000",
            width: 92,
            flexShrink: 0,
            "&:hover": { bgcolor: "#000", color: "#fff" },
          }}
          onClick={submitSearch}
        >
          OK
        </Button>
      </Stack>

      {renderOrder}
    </>
  );
}
