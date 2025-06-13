"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "chrome", visitors: 50, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 10, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 15, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 25, fill: "var(--color-edge)" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "#e6edd9",
  },
  safari: {
    label: "Safari",
    color: "#cdea9c",
  },
  firefox: {
    label: "Firefox",
    color: "#eb822d",
  },
  edge: {
    label: "Edge",
    color: "#6ebf96",
  },
};

export function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[450px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
        />
      </PieChart>
    </ChartContainer>
  );
}
