import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { _customerList } from "@/@mockup/_customer";

type Props = {
  id: string;
};

export default function CustomerEditView({ id }: Props) {
  const currentCustomer = _customerList.find((customer) => customer.id === id);

  return (
    <>
      <CustomBreadCrumbs
        heading="Edit"
        links={[
          {
            name: "Dashboard",
            href: PATH_ADMIN_DASHBOARD.customer.root,
          },
          {
            name: "Customer",
            href: PATH_ADMIN_DASHBOARD.customer.root,
          },
          { name: currentCustomer?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
    </>
  );
}
