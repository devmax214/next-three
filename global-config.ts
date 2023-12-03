import { PATH_ADMIN_DASHBOARD } from "@/routers/path";

export const JWT_SECRET_KEY =
  process.env.NEXT_PUBLIC_HOST_API || "Wonderraw EShop 2023";

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;

export const endpoints = {
  auth: {
    login: "/api/auth/login",
    register: "/api/auth/register",
    me: "/api/auth/me",
  },
  category: {
    list: "/api/category",
    save: "/api/category",
  },
  attribute: {
    color: {
      save: "/api/attribute/color",
      list: "/api/attribute/color",
      edit: (id: string) => `/api/attribute/color/${id}`,
    },
    size: {
      save: "/api/attribute/size",
      list: "/api/attribute/size",
      edit: (id: string) => `/api/attribute/size/${id}`,
    },
    material: {
      list: "/api/attribute/material",
      save: "/api/attribute/material",
      edit: (id: string) => `/api/attribute/material/${id}`,
    },
  },
  configuration: {
    list: "/api/customize",
  },
  product: {
    bestSellers: "/api/product/sellers",
    relations: "/api/product/relations",
    detail: (id: string) => `/api/product/${id}`,
    list: "/api/product",
    search: "/api/product/search",
  },
  customer: {
    list: "/api/customer",
    address: { list: "/api/customer/address", create: "/api/customer/address" },
    payment: { list: "/api/customer/payment", create: "/api/customer/payment" },
    profile: {
      profile: "/api/customer/profile",
      update: "/api/customer/profile",
    },
    password: "api/customer/password",
  },
  customize: {
    list: "/api/customize",
    get: (id: string) => `/api/customize/${id}`
  },
  order: {
    create: "/api/order",
  },
  upload: "/api/upload/file",
  image: "/api/upload/image",
  contact: "/api/contact",
  admin: {
    category: {
      edit: (id: string) => `/api/admin/category/${id}`,
    },
    product: {
      list: "/api/admin/product",
      create: "/api/admin/product",
      edit: (id: string) => `/api/admin/product/${id}`,
    },
  },
};

export const PATH_AFTER_ADMIN_LOGIN = PATH_ADMIN_DASHBOARD.product.root;

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};
