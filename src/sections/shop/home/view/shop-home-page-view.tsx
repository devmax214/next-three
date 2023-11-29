import Section1 from "../section1";
import Section2 from "../section2";
import Section3 from "../section3";
import { IProductItem } from "@/@types/product";

type Props = {
  bestSellers: IProductItem[];
};

export default function ShopHomePageView({ bestSellers }: Props) {
  return (
    <>
      {/*  HERO */}
      <Section1 />

      {/*  BEST SELLERS */}
      <Section2 bestSellers={bestSellers} />

      {/*  SELECTION */}
      <Section3 />
    </>
  );
}
