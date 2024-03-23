'use client';
import React from "react";
import Chart from "react-apexcharts";
import BaseCard from "./BaseCard";


const exampleProps = {
  title: "Area Chart",
  options : {
    chart: {
      height: 280,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    }
  }
};


interface ExampleProps {
  title?: string;
  options?: any;
}

const AreaChartCard = (props: ExampleProps) => {

  var { title, options } = props;


  if (options == null) {
    options = exampleProps.options;
  }


  if (title == null) {
    title = "Area Chart";
  }

  return (
    <BaseCard title={title}>
      <Chart options={options} series={options.series} type="area" style={{ width: "100%", height: "100%" }} />
    </BaseCard>
  );
}

export default AreaChartCard;