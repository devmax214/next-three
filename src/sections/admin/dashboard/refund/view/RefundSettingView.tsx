import React from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { Card, CardHeader } from "@mui/material";
import RefundReasonList from "../RefundReasonList";

type Props = {};

export default function RefundSettingView(props: Props) {
  return (
    <>
      <CustomBreadCrumbs
        heading="List"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          {
            name: "Refund Request",
            href: PATH_ADMIN_DASHBOARD.refund.root,
          },
          { name: "Settings" },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Card>
        <CardHeader title="Refund Reasons" />

        <RefundReasonList />
      </Card>
    </>
  );
}
