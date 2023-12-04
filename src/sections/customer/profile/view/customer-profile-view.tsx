import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import FormProvider, {
  RHFCheckbox,
  RhfSelect,
  RHFTextField,
} from "@/components/hook-form";
import { saveProfile, useGetProfile } from "@/services/customer";
import { mutate } from "swr";

const GENDERS = [
  { value: "man", label: "Male" },
  { value: "female", label: "Female" },
];

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  color: "#5C6166",
  fontWeight: 500,
  fontSize: 14,
  fontFamily: secondaryFont.style.fontFamily,
}));

const ProfileSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  birthday: Yup.date().required("Birthday is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  accept: Yup.boolean().required("Accept is required"),
});

export default function CustomerProfileView() {
  const { profile, profileLoading } = useGetProfile();

  const defaultValues = {
    firstname: "",
    lastname: "",
    birthday: "",
    gender: "",
    email: "",
    phone: "",
    accept: false,
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset({
      firstname: profile.firstname,
      lastname: profile.lastname,
      birthday: new Date(profile.birthday),
      gender: profile.gender,
      email: profile.email,
      phone: profile.phone,
      accept: profile.accept,
    });
  }, [profileLoading]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    try {
      const res = await saveProfile(data);

      mutate({
        firstname: res.firstname,
        lastname: res.lastname,
        birthday: new Date(res.birthday),
        gender: res.gender,
        email: res.email,
        phone: res.phone,
        accept: res.accept,
      });
    } catch (error) {}
  });

  const renderProfile = (
    <Stack>
      <Stack py={2}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Profile information
        </Typography>
      </Stack>

      <Divider />

      <Grid container spacing={3} p={2}>
        <Grid item xs={6} md={6}>
          <StyledTypography1>First name</StyledTypography1>
          <RHFTextField name="firstname" />
        </Grid>
        <Grid item xs={6} md={6}>
          <StyledTypography1>Last name</StyledTypography1>
          <RHFTextField name="lastname" />
        </Grid>
        <Grid item xs={6} md={6}>
          <StyledTypography1>Date of birth</StyledTypography1>
          {/*<RHFTextField name="birthday" />*/}
          <Controller
            name="birthday"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                {...field}
                format="dd/MM/yyyy"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message,
                    size: "small",
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <StyledTypography1>Gender</StyledTypography1>
          <RhfSelect name="gender">
            {GENDERS.map((gender, index) => (
              <MenuItem key={index} value={gender.value}>
                {gender.label}
              </MenuItem>
            ))}
          </RhfSelect>
        </Grid>
      </Grid>
    </Stack>
  );

  const renderContact = (
    <Stack>
      <Stack py={2}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Contact
        </Typography>
      </Stack>

      <Divider />

      <Grid container spacing={3} p={2}>
        <Grid item xs={12} md={6}>
          <StyledTypography1>Email</StyledTypography1>
          <RHFTextField name="email" disabled />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTypography1>Phone</StyledTypography1>
          <RHFTextField name="phone" />
        </Grid>
      </Grid>
    </Stack>
  );

  const renderAction = (
    <Stack alignItems="center" gap={2}>
      <Stack direction="row" gap={3}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 200,
            bgcolor: "#292F3D",
            "&:hover": { bgcolor: "#550248" },
          }}
        >
          SUBMIT
        </Button>

        <Button
          variant="contained"
          sx={{
            width: 160,
            bgcolor: "#ACB1B8",
            "&:hover": { bgcolor: "#550248" },
          }}
          onClick={() => reset(profile)}
        >
          CANCEL
        </Button>
      </Stack>

      <RHFCheckbox name="accept" label="Accepts Marketing from WonderRaw" />
    </Stack>
  );

  return (
    <>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack gap={4}>
          {renderProfile}

          {renderContact}

          {renderAction}
        </Stack>
      </FormProvider>
    </>
  );
}
