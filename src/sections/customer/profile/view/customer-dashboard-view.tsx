import { Button, Divider, Grid, Stack, Typography, MenuItem, Select } from "@mui/material";
import DashboardPanel from "../dashboard-panel";
import SpendIcon from "@/components/icons/customer/icon-spend";
import OrderCountIcon from "@/components/icons/customer/icon-order-count";
import AddressCountIcon from "@/components/icons/customer/icon-address-count";
import { secondaryFont } from "@/theme/typography";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import React from "react";
import { useGetProfile } from "@/services/customer";
import { PhoneInput } from 'react-international-phone';

type Props = {
  addressCnt: number,
  orderCnt: number
};

export default function CustomerDashboardView(props: Props) {
  const { profile, profileLoading } = useGetProfile();
  const { addressCnt, orderCnt } = props;

  const renderData = (
    <Grid container spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={4} md={4}>
        <DashboardPanel
          icon={<SpendIcon sx={{ width: 17, height: 16 }} />}
          label="Total spent"
          value={`${JSON.parse(localStorage.getItem('currency')).value} 2009,02`}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <DashboardPanel
          icon={<OrderCountIcon sx={{ width: 16, height: 13 }} />}
          label="All orders"
          value={String(orderCnt)}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <DashboardPanel
          icon={<AddressCountIcon sx={{ width: 16, height: 14 }} />}
          label="Addresses"
          value={String(addressCnt)}
        />
      </Grid>
    </Grid>
  );

  const renderProfile = (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={1}
      >
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

        <Button
          component={RouterLink}
          href={PATH_SHOP.customer.profile}
          startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
        >
          Edit
        </Button>
      </Stack>

      <Divider />

      <Grid container spacing={3} p={2}>
        <Grid item xs={6} md={6}>
          <ContentItem title="First name" value={profile.firstname} />
        </Grid>
        <Grid item xs={6} md={6}>
          <ContentItem title="Last name" value={profile.lastname} />
        </Grid>
        <Grid item xs={6} md={6}>
          <ContentItem title="Date of birth" value={`${new Date(profile.birthday).getMonth() + 1}.${new Date(profile.birthday).getDate()}.${new Date(profile.birthday).getFullYear()}`} />
        </Grid>
        <Grid item xs={6} md={6}>
          <ContentItem title="Gender" value={GENDERS[profile.gender]} />
        </Grid>
      </Grid>
    </Stack>
  );

  const renderContact = (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={1}
      >
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

        <Button
          component={RouterLink}
          href={PATH_SHOP.customer.profile}
          startIcon={<EditIcon sx={{ width: 13.4, height: 16 }} />}
        >
          Edit
        </Button>
      </Stack>

      <Divider />

      <Grid container spacing={3} p={2}>
        <Grid item xs={12} md={6}>
          <ContentItem title="Email" value={profile.email} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentItem title="Phone" value={profile.phone} />
        </Grid>
      </Grid>
    </Stack>
  );

  const renderOther = (
    <Stack>
      <Stack py={1}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Other info
        </Typography>
      </Stack>

      <Divider />

      <Grid container spacing={3} p={2}>
        <Grid item md={6}>
          <ContentItem
            title="Accepts Marketing from WonderRaw"
            value={profile.accept ? `"Yes"` : `"No"`}
          />
        </Grid>
      </Grid>
    </Stack>
  );

  return (
    <>
      {renderData}

      <Stack gap={4} mt={4}>
        {renderProfile}

        {renderContact}

        {renderOther}
      </Stack>
    </>
  );
}

const GENDERS = {
  "man": "Male",
  "female": "Female",
  "other": "Other",
};

function ContentItem({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: { xs: 13, md: 14 },
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 15, md: 16 },
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
