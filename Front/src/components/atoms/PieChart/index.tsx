import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import * as React from "react";

type PieValue = {
  value: number;
  label: string;
  color?: string;
};

type CustomPieChartProps = {
  title: string;
  description?: string;
  values: PieValue[];
  chartWidth?: number;
  chartHeight?: number;
};

export default function CustomPieChart({
  title,
  description,
  values,
  chartWidth = 450,
  chartHeight = 300,
}: CustomPieChartProps) {
  const {
    margins: { xxxs },
    roundness: { md },
  } = useTheme();

  return (
    <Card
      elevation={3}
      style={{ marginTop: xxxs, padding: xxxs, borderRadius: md, minHeight: 450, maxHeight: 4500 }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <PieChart
        series={[
          {
            data: values,
          },
        ]}
        width={chartWidth}
        height={chartHeight}
      />

      <CardContent>
        {description && (
          <Typography variant="body2" style={{ marginTop: xxxs }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
