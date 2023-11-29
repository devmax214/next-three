import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import React from "react";
import CouponNewEditForm from "@/sections/admin/dashboard/coupon/coupon-new-edit-form";

type Props = {};

export default function CreateCouponView(props: Props) {
  return (
    <>
      <CustomBreadCrumbs
        heading="Create New Coupon"
        links={[
          { name: "Dashboard", href: PATH_ADMIN_DASHBOARD.root },
          { name: "Coupon", href: PATH_ADMIN_DASHBOARD.coupon.list },
          { name: "Create New Coupon" },
        ]}
      />

      <CouponNewEditForm />
    </>
  );
}
