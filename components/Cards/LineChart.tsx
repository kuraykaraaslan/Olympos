'use client';
import React from "react";
import Chart from "react-apexcharts";
import BaseCard from "./BaseCard";

const LineChartCard = (options: any)  => {

  if (options === null) {
    return (
      <BaseCard>
        <p>Loading...</p>
      </BaseCard>
    )
  }

  return (
    <BaseCard>
      <Chart options={options} series={options.series} type="line" style={{ width: "100%", height: "100%" }} />
    </BaseCard>
  );
}

export default LineChartCard;