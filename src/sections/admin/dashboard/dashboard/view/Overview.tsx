import { Grid } from "@mui/material";
import RecentPurchases from "../RecentPurchases";
import StockOutProducts from "../StockOutProducts";
import WishCard from "../WishCard";
import DashboardCard from "../Card";
import YearlySales from "../YearlySales";

const cardList = [{}, {}, {}, {}];
const recentPurchasesList = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
];
const stockOutProductsList = [
  { id: "1" },
  { id: "2" },
  { id: " 3" },
  { id: "4" },
];

type Props = {};

export default function Overview(props: Props) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <WishCard />
        </Grid>

        <Grid container item md={6} xs={12} spacing={3}>
          {cardList.map((item) => (
            <Grid item md={6} sm={6} xs={12}>
              <DashboardCard sx={{ height: 1 }} />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12}>
          <YearlySales
            chart={{
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              series: [
                {
                  year: "2019",
                  data: [
                    {
                      name: "Total Income",
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: "Total Expenses",
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: "2020",
                  data: [
                    {
                      name: "Total Income",
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: "Total Expenses",
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <RecentPurchases
            title="Recent Purchases"
            tableLabels={[
              { id: "id", label: "Order ID" },
              { id: "customer", label: "Customer" },
              { id: "product", label: "Product" },
              { id: "payment", label: "Payment" },
              { id: "amount", label: "Amount" },
            ]}
            tableData={recentPurchasesList}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <StockOutProducts
            title="Stock Out Products"
            tableLabels={[
              { id: "product", label: "Product" },
              { id: "stock", label: "Stock" },
              { id: "amount", label: "Amount" },
            ]}
            tableData={stockOutProductsList}
          />
        </Grid>
      </Grid>
    </>
  );
}
