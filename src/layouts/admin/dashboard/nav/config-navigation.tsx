import SvgColor from "@/components/svg-color";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import duotone from "@/components/icons/duotone";

const icon = (name: string) => (
  <SvgColor
    src={`/icons/navbar/${name}.svg`}
    color="white"
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  dashboard: duotone.Dashboard,
  category: duotone.Category,
  attribute: duotone.Attribute,
  project: duotone.Products,
  order: duotone.Order,
  customer: duotone.Customers,
  refund: duotone.Refund,
  ticket: duotone.ElementHub,
  review: duotone.Review,
};

const navConfig = [
  {
    title: "Dashboard",
    path: PATH_ADMIN_DASHBOARD.dashboard,
    icon: <ICONS.dashboard />,
  },
  {
    title: "Categories",
    path: PATH_ADMIN_DASHBOARD.categories.root,
    icon: <ICONS.category />,
    children: [
      {
        title: "Categories",
        path: PATH_ADMIN_DASHBOARD.categories.list,
      },
      // {
      //   title: "Sub Categories",
      //   path: PATH_ADMIN_DASHBOARD.categories.sub,
      // },
    ],
  },
  {
    title: "Attributes",
    path: PATH_ADMIN_DASHBOARD.attributes.root,
    icon: <ICONS.attribute />,
    children: [
      {
        title: "Color",
        path: PATH_ADMIN_DASHBOARD.attributes.color,
      },
      {
        title: "Size",
        path: PATH_ADMIN_DASHBOARD.attributes.size,
      },
      {
        title: "Material",
        path: PATH_ADMIN_DASHBOARD.attributes.material,
      },
    ],
  },
  {
    title: "Products",
    path: PATH_ADMIN_DASHBOARD.product.root,
    icon: <ICONS.project />,
    children: [
      {
        title: "Product List",
        path: PATH_ADMIN_DASHBOARD.product.list,
      },
      {
        title: "Create Product",
        path: PATH_ADMIN_DASHBOARD.product.create,
      },
    ],
  },
  {
    title: "Customers",
    path: PATH_ADMIN_DASHBOARD.customer.root,
    icon: <ICONS.customer />,
    children: [
      {
        title: "Customer List",
        path: PATH_ADMIN_DASHBOARD.customer.list,
      },
      // {
      //   title: "Create Customer",
      //   path: PATH_ADMIN_DASHBOARD.customer.create,
      // },
    ],
  },
  {
    title: "Coupons",
    path: PATH_ADMIN_DASHBOARD.coupon.root,
    icon: <ICONS.order />,
    children: [
      {
        title: "Coupons List",
        path: PATH_ADMIN_DASHBOARD.coupon.list,
      },
      {
        title: "Create Coupon",
        path: PATH_ADMIN_DASHBOARD.coupon.create,
      },
    ],
  },
  {
    title: "Orders",
    path: PATH_ADMIN_DASHBOARD.order.root,
    icon: <ICONS.order />,
    children: [
      {
        title: "Order List",
        path: PATH_ADMIN_DASHBOARD.order.list,
      },
    ],
  },
  {
    title: "Refunds",
    path: PATH_ADMIN_DASHBOARD.refund.root,
    icon: <ICONS.refund />,
    children: [
      {
        title: "Refund Request",
        path: PATH_ADMIN_DASHBOARD.refund.list,
      },
      {
        title: "Refund Settings",
        path: PATH_ADMIN_DASHBOARD.refund.setting,
      },
    ],
  },
  {
    title: "Reviews",
    path: PATH_ADMIN_DASHBOARD.review.list,
    icon: <ICONS.review />,
  },
  {
    title: "Support Tickets",
    path: PATH_ADMIN_DASHBOARD.ticket.root,
    icon: <ICONS.ticket />,
  },
];

export default navConfig;
