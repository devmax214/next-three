function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_ADMIN_AUTH = "/admin/auth";
const ROOTS_ADMIN_DASHBOARD = "/admin/dashboard";

export const PATH_ADMIN_AUTH = {
  login: path(ROOTS_ADMIN_AUTH, "/auth"),
  register: path(ROOTS_ADMIN_AUTH, "/register"),
  forgot: path(ROOTS_ADMIN_AUTH, "/forgot"),
};

export const PATH_ADMIN_DASHBOARD = {
  root: ROOTS_ADMIN_DASHBOARD,
  dashboard: path(ROOTS_ADMIN_DASHBOARD, "/dashboard"),
  categories: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/categories"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/categories/list"),
    sub: path(ROOTS_ADMIN_DASHBOARD, "/categories/sub"),
    edit: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/categories/${id}`),
  },
  attributes: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/attributes"),
    size: path(ROOTS_ADMIN_DASHBOARD, "/attributes/size"),
    color: path(ROOTS_ADMIN_DASHBOARD, "/attributes/color"),
    material: path(ROOTS_ADMIN_DASHBOARD, "/attributes/material"),
  },
  product: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/product"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/product/create"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/product/list"),
    edit: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/product/${id}/edit`),
    details: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/product/${id}`),
  },
  order: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/order"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/order/list"),
    details: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/order/${id}`),
  },
  customer: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/customer"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/customer/create"),
    edit: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/customer/${id}/edit`),
    list: path(ROOTS_ADMIN_DASHBOARD, "/customer/list"),
  },
  coupon: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/coupon"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/coupon/list"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/coupon/create"),
  },
  refund: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/refund"),
    setting: path(ROOTS_ADMIN_DASHBOARD, "/refund/setting"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/refund/list"),
  },
  ticket: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/ticket"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/ticket/create"),
  },
  review: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/review"),
    list: path(ROOTS_ADMIN_DASHBOARD, "/review/list"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/ticket/create"),
  },
};

export const PATH_SHOP = {
  home: "/",
  about: "/about",
  faqs: "/faqs",
  community: "/community",
  promo: "/promo",
  privacy: "/privacy",
  shippingPolicy: "/shipping-policy",
  termsOfUse: "/terms-of-use",
  contact: "/contact",
  login: "/auth/auth",
  forgot: "/auth/forgot",
  register: "/auth/register",
  product: {
    search: "/product/search",
    details: (id: string) => `/product/${id}`,
  },
  checkout: "/checkout",
  payment: "/payment",
  customer: {
    root: "/user",
    profile: "/user/profile",
    order: {
      list: "/user/order",
      track: (id: string) => `/user/order/${id}/track`,
    },
    feedback: {
      list: "/user/feedback",
      rating: (id: string) => `/user/feedback/${id}`,
    },
    address: {
      list: "/user/address",
      create: "/user/address/create",
      edit: (id: string) => `/user/address/${id}`,
    },
  },
};

export const PATH_CONFIGURATOR = {
  root: "/",
  about: "/about",
  faqs: "/faq",
  community: "/community",
  newsletter: "/newsletter",
  gallery: "/gallery",
  product: {
    create: (id: string) => `/customize/${id}`,
    edit: (id: string) => `/customize/${id}/edit`,
    review: (id: string) => `/customize/${id}/review`,
  },
  privacy: "/privacy",
  termsOfUse: "/terms-of-use",
  shippingPolicy: "/shipping-policy",
  contact: "/contact",
  checkout: "/checkout",
  quote: "/quote",
  order: "/order"
};
