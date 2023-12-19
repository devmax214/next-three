import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  IconButton,
  Link,
  Card,
  FormControlLabel,
  Checkbox,
  Box,
  Modal
} from "@mui/material";
import { RHFAutocomplete, RHFTextField } from "@/components/hook-form";
import { styled } from "@mui/material/styles";
import { IAddressItem } from "@/@types/customer";
import { useSession } from "next-auth/react";
import { countries } from "@/@mockup/country";
import Iconify from "@/components/iconify";
import { useEffect, useState } from "react";
import { primaryFont, secondaryFont } from "@/theme/typography";
import SaveIcon from '@/components/icons/checkout/icon-save';
import { useCheckoutContext } from "@/components/checkout/context";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: "#292F3D",
}));

type Props = { addresses: IAddressItem[]; setAddresses: (id: string) => void; renderModal: Element; onNewAddrSubmit: Function; onSubmit: Function };

export default function ShippingAddress({ addresses, setAddresses, renderModal, onNewAddrSubmit, onSubmit }: Props) {
  const { data: session, status } = useSession();
  const checkout = useCheckoutContext();

  const [selectedAddress, setSelectedAddress] = useState("");

  const isLogin = status === "authenticated";

  useEffect(() => {
    if (selectedAddress) {
      setAddresses(selectedAddress);
    }
  }, [selectedAddress]);

  const renderSelectAddress = (
    <Stack gap={2}>
      <StyledTypography>Select your address</StyledTypography>

      <Select
        size="small"
        value={selectedAddress}
        sx={{
          ".css-nq0j4t-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
            textWrap: "wrap !important"
          }
        }}
        onChange={(event) => {
          setSelectedAddress(event.target.value as string);
        }}
      >
        {addresses.map((address, index) => (
          <MenuItem key={index} value={address._id}>
            {`${address.address}, ${address.postal} ${address.city}, ${address.country}`}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );

  const renderNewAddress = (
    <Stack gap={1}>
      <Stack direction={"row"} justifyContent="space-between">
        <StyledTypography sx={{ paddingTop: '6px' }}>New address</StyledTypography>

        <Button
          type="button"
          onClick={onNewAddrSubmit}
        >
          <Stack direction={"row"} gap={1} justifyContent={"space-around"}>
            <SaveIcon width={16} height={16} sx={{ marginTop: '3px' }} />
            <Typography sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#F05A4A',
              '&:hover': {
                bgcolor: 'transparent'
              }
            }}>Save a new address</Typography>
          </Stack>
        </Button>
      </Stack>

      <Stack gap={5}>
        <Grid container spacing={2.5}>
          <Grid item md={12} xs={12}>
            <RHFAutocomplete
              name="country"
              placeholder="Country"
              options={countries.map((country) => country.label)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => {
                const { code, label, phone } = countries.filter(
                  (country) => country.label === option
                )[0];

                if (!label) {
                  return null;
                }

                return (
                  <li {...props} key={label}>
                    <Iconify
                      key={label}
                      icon={`circle-flags:${code.toLowerCase()}`}
                      width={28}
                      sx={{ mr: 1 }}
                    />
                    {label} ({code}) +{phone}
                  </li>
                );
              }}
            />
          </Grid>

          <Grid item md={6} xs={6} sx={{ pr: 0.5 }}>
            <RHFTextField size="small" name="firstname" placeholder="First name" />
          </Grid>

          <Grid item md={6} xs={6}>
            <RHFTextField size="small" name="lastname" placeholder="Last name" />
          </Grid>

          <Grid item md={12} xs={12}>
            <RHFTextField size="small" name="address" placeholder="Address" />
          </Grid>

          <Grid item md={12} xs={12}>
            <RHFTextField size="small"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </Grid>

          <Grid item md={7} xs={6} sx={{ pr: 0.5 }}>
            <RHFTextField size="small" name="city" placeholder="City" />
          </Grid>

          <Grid item md={5} xs={6}>
            <RHFTextField size="small" name="postal" placeholder="Postcode" />
          </Grid>

          <Grid item md={12} xs={12}>
            <RHFTextField size="small" name="phone" placeholder="Phone" />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="center" gap={5} px={{ xs: 0, md: 3 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#ACB1B8",
              width: { xs: 130, md: 225 },
              fontSize: { xs: 12, md: 16 },
              height: { xs: 40, md: 45 },
              "&:hover": { bgcolor: "#6AB67A" },
            }}
          >
            Return to cart
          </Button>

          <Button
            type="button"
            onClick={onSubmit}
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#292F3D",
              width: { xs: 170, md: 225 },
              height: { xs: 40, md: 45 },
              fontSize: { xs: 12, md: 16 },
              "&:hover": { bgcolor: "#550248" },
            }}
          >
            Continue to shipping
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderNewAddress2 = (
    <Stack gap={5}>
      {/* <Stack gap={2}>
        <StyledTypography sx={{ paddingTop: '6px' }}>Select your address</StyledTypography>

        <FormControlLabel
          control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" sx={{ color: '#000000' }} />}
          label="Transport not included - Client Pick up"
          labelPlacement="end"
          componentsProps={{
            typography: {
              sx: { fontSize: 14, color: "#5C6166", fontWeight: 500 },
            },
          }}
        />

      </Stack> */}

      <Stack direction="row" justifyContent={"space-between"}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#ACB1B8",
            width: { xs: 130, md: 225 },
            fontSize: { xs: 12, md: 16 },
            height: { xs: 40, md: 45 },
            "&:hover": { bgcolor: "#6AB67A" },
          }}
        >
          Return to cart
        </Button>

        <Button
          type="button"
          onClick={onSubmit}
          fullWidth
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#292F3D",
            width: { xs: 170, md: 225 },
            height: { xs: 40, md: 45 },
            fontSize: { xs: 12, md: 16 },
            "&:hover": { bgcolor: "#550248" },
          }}
        >
          Continue to shipping
        </Button>
      </Stack>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          fontFamily: secondaryFont.style.fontFamily
        }}
      >
        The Wonder Raw sales team will contack you to arrange the pick-up of your order
      </Typography>
    </Stack>
  );

  return (
    <>
      <Stack gap={4}>
        {checkout.shippingInclude &&
          <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>Shipping address</Typography>
        }
        {checkout.shippingInclude && isLogin && renderSelectAddress}

        {checkout.shippingInclude ? renderNewAddress : renderNewAddress2}
        {renderModal}
      </Stack>
    </>
  );
}
