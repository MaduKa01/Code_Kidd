import { Card, Typography, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import * as React from "react";

type BarData = {
  [key: string]: string | number;
};

type CustomBarChartProps = {
  title: string;
  dataset: BarData[];
  yAxisKey: string;
  seriesKey: string;
  seriesLabel: string;
  chartWidth?: number;
  chartHeight?: number;
};

export default function CustomBarChart({
  title,
  dataset,
  yAxisKey,
  seriesKey,
  seriesLabel,
  chartWidth = 800,
  chartHeight = 400,
}: CustomBarChartProps) {
  const {
    margins: { xxxs },
    roundness: { md },
  } = useTheme();

  const chartSetting = {
    xAxis: [{ label: "value" }],
    width: chartWidth,
    height: chartHeight,
  };

  const valueFormatter = (value: number) => `${value}`;

  return (
    <Card
      elevation={3}
      style={{ marginTop: xxxs, padding: xxxs, borderRadius: md, minHeight: 450, maxHeight: 450 }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: yAxisKey }]}
        series={[{ dataKey: seriesKey, label: seriesLabel, valueFormatter }]}
        layout="horizontal"
        {...chartSetting}
      />
    </Card>
  );
}
