import { PATH_SHOP } from "@/routers/path";
import WomenMenu from "@/layouts/shop/header/menu/WomenMenu";
import ManMenu from "@/layouts/shop/header/menu/ManMenu";

export const navConfig = [
  { title: "WOMEN", path: "/", children: <WomenMenu /> },
  { title: "MEN", path: "/", children: <ManMenu /> },
  { title: "about-us", path: PATH_SHOP.about },
  { title: "faq", path: PATH_SHOP.faqs },
  { title: "community", path: PATH_SHOP.community },
  { title: "sale", path: PATH_SHOP.promo, underline: true },
];
