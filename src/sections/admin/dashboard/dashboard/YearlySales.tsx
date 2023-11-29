import { useCallback, useState } from "react";
import {
  Box,
  ButtonBase,
  Card,
  CardHeader,
  CardProps,
  MenuItem,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import Chart, { useChart } from "@/components/chart";
import Iconify from "@/components/iconify";

interface Props extends CardProps {
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      year: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

export default function YearlySales({ chart, ...other }: Props) {
  const { colors, categories, series, options } = chart;

  const popover = usePopover();

  const [seriesData, setSeriesData] = useState("2019");

  const chartOptions = useChart({
    colors,
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    xaxis: {
      categories,
    },
    ...options,
  });

  const handleChangeSeries = useCallback(
    (newValue: string) => {
      popover.onClose();
      setSeriesData(newValue);
    },
    [popover]
  );

  return (
    <>
      <Card {...other}>
        <CardHeader
          title="Yearly Sales"
          subheader="(+43%) than last year"
          action={
            <ButtonBase
              onClick={popover.onOpen}
              sx={{
                pl: 1,
                py: 0.5,
                pr: 0.5,
                borderRadius: 1,
                typography: "subtitle2",
                bgcolor: "background.neutral",
              }}
            >
              {seriesData}

              <Iconify
                width={16}
                icon={
                  popover.open
                    ? "eva:arrow-ios-upward-fill"
                    : "eva:arrow-ios-downward-fill"
                }
                sx={{ ml: 0.5 }}
              />
            </ButtonBase>
          }
        />

        {series.map((item) => (
          <Box key={item.year} sx={{ mt: 3, mx: 3 }}>
            {item.year === seriesData && (
              <Chart
                dir="ltr"
                type="area"
                series={item.data}
                options={chartOptions}
                height={364}
              />
            )}
          </Box>
        ))}
      </Card>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 140 }}
      >
        {series.map((option) => (
          <MenuItem
            key={option.year}
            selected={option.year === seriesData}
            onClick={() => handleChangeSeries(option.year)}
          >
            {option.year}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
