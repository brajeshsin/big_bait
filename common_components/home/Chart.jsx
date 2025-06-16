"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  {
    browser: "chrome",
    visitors: 50,
    fill: "var(--color-chrome)",
    color: "#e6edd9",
  },
  {
    browser: "safari",
    visitors: 10,
    fill: "var(--color-safari)",
    color: "#eb822d",
  },
  {
    browser: "firefox",
    visitors: 15,
    fill: "var(--color-firefox)",
    color: "#cdea9c",
  },
  {
    browser: "edge",
    visitors: 25,
    fill: "var(--color-edge)",
    color: "#6ebf96",
  },
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
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square md:max-h-[450px]"
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
          >
            <LabelList
              dataKey="browser"
              className="fill-black"
              stroke="none"
              fontSize={12}
              style={{
                color: "orange",
              }}
              formatter={(value) => {
                return `${
                  chartData?.find((val) => val.browser == value)?.visitors
                }%`;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="flex flex-row justify-center items-center gap-2 md:gap-10 flex-wrap p-8 sm:p-0">
        {chartData?.map((item, idx) => {
          return (
            <p
              key={idx}
              className={`w-full md:w-36 text-center py-2 rounded-4xl border-3 border-black`}
              style={{
                backgroundColor: item?.color,
              }}
            >
              {item?.browser}
            </p>
          );
        })}
      </div>
    </div>
  );
}
