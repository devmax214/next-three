import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  paginationClasses,
} from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import ProductSearchToolbar from "../product-search-toolbar";
import {
  ICategoryItem,
  IColorItem,
  IMaterialItem,
  IProductItem,
  ISizeItem,
} from "@/@types/product";
import { getComparator, useTable } from "@/components/table";
import { ProductCard1 } from "@/components/proudct-cards";

type IProductFilter = {
  name: string;
};

type Props = {
  products: IProductItem[];
  colors: IColorItem[];
  sizes: ISizeItem[];
  categories: ICategoryItem[];
  materials: IMaterialItem[];
};

const defaultFilters: IProductFilter = { name: "" };

export default function ProductSearchView({
  products,
  colors,
  sizes,
  categories,
  materials,
}: Props) {
  const table = useTable();

  // const [tableData, setTableData] = useState(products);

  const tableData = products;

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#fff",
        }}
      >
        <Container
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            mode="dark"
            heading="T-SHIRTS"
            links={[
              {
                name: "Home",
                href: PATH_ADMIN_DASHBOARD.root,
              },
              {
                name: "Women",
                href: PATH_ADMIN_DASHBOARD.order.root,
              },
              { name: "T-SHIRTS" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <ProductSearchToolbar
            colors={colors}
            sizes={sizes}
            categories={categories}
            materials={materials}
          />

          <Grid container spacing={3} sx={{ mt: { xs: 2, md: 2 } }}>
            {dataFiltered
              .slice(
                table.page * table.rowsPerPage,
                table.page * table.rowsPerPage + table.rowsPerPage
              )
              .map((product) => (
                <Grid item xs={6} md={3}>
                  <ProductCard1 product={product} />
                </Grid>
              ))}
          </Grid>

          <Pagination
            count={dataFiltered.length}
            sx={{
              mt: 8,
              [`& .${paginationClasses.ul}`]: {
                justifyContent: "center",
              },
            }}
          />
        </Container>
      </Box>
    </>
  );
}

function applyFilter({
  inputData,
  comparator,
  filters,
}: {
  inputData: IProductItem[];
  comparator: (a: any, b: any) => number;
  filters: IProductFilter;
}) {
  const { name } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  return inputData;
}
