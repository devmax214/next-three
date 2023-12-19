import {
  Box,
  Button,
  Card,
  IconButton,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "@/components/image";
import { PRODUCT_SIZE_OPTIONS } from "@/@mockup/_product";
import { RouterLink } from "@/routers/components";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import { ICustomizationProduct } from "@/@types/configuration";
import SvgColor from "@/components/svg-color";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined, ArrowRight } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { endpoints } from "../../../global-config";
import ConfigurationCanvas from "../../sections/customize/configurator/configuration-canvas";
import { CustomizeContext } from '@/components/customize/context/customize-context';
import { useContext, useState, useEffect, useRef } from "react";
import { CustomizeProvider } from "@/components/customize/context";

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "15px" },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  background: "#EEE",
  color: "#292F3D",
  fontSize: 14,
  fontFamily: secondaryFont.style.fontFamily,
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
}));

type Props = {
  // product: IProductItem;
  product: ICustomizationProduct;
};

export default function ProductCard5(props: any) {
  const product = props.product;
  const router = useRouter();
  const id = product._id;
  const name = product.name;
  const linkTo = PATH_CONFIGURATOR.product.edit(id);

  const remove = async () => {
    const result = await axios.delete(endpoints.customize.list, { data: { id: product._id } });
    if (result.data.success) router.push(PATH_CONFIGURATOR.gallery);
  }

  const [arrowLeftCount, setArrowLeftCount] = useState(0);
  const [arrowRightCount, setArrowRightCount] = useState(0);

  return (
    <>
      <CustomizeProvider passInitState={product.context}>
        <Card
          key={id}
          sx={{
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.18)",
            borderRadius: "13px",
          }}
        >
          <Box
            component="div"
            sx={{
              position: "relative",
              overflow: "hidden",
              bgcolor: "#F8F8F8",
              "&:hover .add-cart-btn": { opacity: 1 },
              "&:hover .product-image": { transform: "scale(1.1)" },
            }}
          >
            <ConfigurationCanvas page="gallery" ctx={typeof product.context === "object" ? product.context : {}} arrowLeftCount={arrowLeftCount} arrowRightCount={arrowRightCount} id={`myCanvas_${id}`} type={product.product} />

            <Box
              className="add-cart-btn"
              component="div"
              sx={{
                display: { md: 'block', xs: 'none' },
                position: "absolute",
                left: 10,
                bottom: 10,
                opacity: 0,
                zIndex: 9,
                transition: (theme) =>
                  theme.transitions.create("all", {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter,
                  }),
              }}
            >
              <Button
                variant="soft"
                sx={{
                  bgcolor: "transparent",
                  minWidth: 35,
                  width: 35,
                  fontSize: 13,
                  fontWeight: 500,
                  "&:hover ": { bgcolor: "#292F3D", color: "#FFFFFF" },
                }}
                onClick={() => setArrowLeftCount(arrowLeftCount + 1)}
              >
                <ArrowBackIosNewOutlined />
              </Button>
            </Box>

            <Box
              className="add-cart-btn"
              component="div"
              sx={{
                display: { md: 'block', xs: 'none' },
                position: "absolute",
                left: 50,
                bottom: 10,
                opacity: 0,
                zIndex: 9,
                transition: (theme) =>
                  theme.transitions.create("all", {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter,
                  }),
              }}
            >
              <Button
                variant="soft"
                sx={{
                  bgcolor: "transparent",
                  minWidth: 35,
                  width: 35,
                  fontSize: 13,
                  fontWeight: 500,
                  "&:hover ": { bgcolor: "#292F3D", color: "#FFFFFF" },
                }}
                onClick={() => setArrowRightCount(arrowRightCount + 1)}
              >
                <ArrowForwardIosOutlined />
              </Button>
            </Box>

            <Link href={linkTo} component={RouterLink}>
              <Box
                className="add-cart-btn"
                component="div"
                sx={{
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                  opacity: 0,
                  zIndex: 9,
                  transition: (theme) =>
                    theme.transitions.create("all", {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.shorter,
                    }),
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#611C57",
                    width: { md: 120, xs: 70 },
                    fontSize: { md: 13, xs: 11 },
                    fontWeight: 500,
                    "&:hover ": { bgcolor: "#6AB67A" },
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Link>
          </Box>

          <Stack
            sx={{ px: 1, pt: 2, pb: 1, textAlign: "left", bgcolor: "#F8F8F8" }}
            gap={1}
          >
            <Box component="div">
              <StyledTypography1>{name}</StyledTypography1>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" gap={{ xs: 1, md: 1 }}>
                {/* <StyledTypography2
                variant="subtitle2"
                sx={{
                  textDecoration: "line-through",
                  color: "#5C6166",
                  fontWeight: 500,
                }}
              >
                76 {JSON.parse(localStorage.getItem('currency')).value}
              </StyledTypography2> */}
                <StyledTypography2 variant="subtitle2">{product.price} {JSON.parse(localStorage.getItem('currency')).value}</StyledTypography2>
              </Stack>

              <Stack direction="row" alignItems="center" gap={{ xs: 0, md: 0.5 }}>
                {/* <StyledSelect
              size="small"
              variant="outlined"
              defaultValue={PRODUCT_SIZE_OPTIONS[2].value}
            >
              {PRODUCT_SIZE_OPTIONS.map((p) => (
                <MenuItem value={p.value}>{p.label}</MenuItem>
              ))}
            </StyledSelect> */}

                <IconButton onClick={remove}>
                  <SvgColor src="/icons/ic_remove.svg" />
                </IconButton>

                {/* <IconButton disableRipple>
              <SvgColor src="/icons/favorite-off.svg" />
            </IconButton> */}
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </CustomizeProvider>
    </>
  );
}
