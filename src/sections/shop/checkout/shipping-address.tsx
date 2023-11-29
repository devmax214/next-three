import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { RHFAutocomplete, RHFTextField } from "@/components/hook-form";
import { styled } from "@mui/material/styles";
import { IAddressItem } from "@/@types/customer";
import { useSession } from "next-auth/react";
import { countries } from "@/@mockup/country";
import Iconify from "@/components/iconify";
import { useEffect, useState } from "react";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: "#292F3D",
}));

type Props = { addresses: IAddressItem[]; setAddresses: (id: string) => void };

export default function ShippingAddress({ addresses, setAddresses }: Props) {
  const { data: session, status } = useSession();

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
    <Stack gap={2}>
      <StyledTypography>New address</StyledTypography>

      <Stack gap={6}>
        <Grid container spacing={1}>
          <Grid item md={12}>
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

          <Grid item md={6}>
            <RHFTextField name="firstname" placeholder="First name" />
          </Grid>

          <Grid item md={6}>
            <RHFTextField name="lastname" placeholder="Last name" />
          </Grid>

          <Grid item md={12}>
            <RHFTextField name="address" placeholder="Address" />
          </Grid>

          <Grid item md={12}>
            <RHFTextField
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </Grid>

          <Grid item md={6}>
            <RHFTextField name="city" placeholder="City" />
          </Grid>

          <Grid item md={6}>
            <RHFTextField name="postal" placeholder="Postcode" />
          </Grid>

          <Grid item md={12}>
            <RHFTextField name="phone" placeholder="Phone" />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="center" gap={5} px={3}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              width: 225,
              bgcolor: "#E6E6E6",
              color: "#000000",
              "&:hover": {
                color: "#fff",
                bgcolor: "#000000",
              },
            }}
          >
            Return to cart
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              width: 225,
              bgcolor: "#000000",
              color: "#fff",
              "&:hover": {
                color: "#000000",
                bgcolor: "#E6E6E6",
              },
            }}
          >
            Continue to shipping
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <>
      <Stack gap={5}>
        <Typography variant="h3">Shipping address</Typography>

        {isLogin && renderSelectAddress}

        {renderNewAddress}
      </Stack>
    </>
  );
}
