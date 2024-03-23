'use client';
import React from "react";
import Chart from "react-apexcharts";
import BaseCard from "./BaseCard";


const exampleProps = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      title: {
        text: 'Yearly',
        align: 'left'
      },
    },
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  };



  interface ExampleProps {
    title? : string;
    options?: {
      chart: {
        id: string;
      };
      xaxis: {
        categories: number[];
      };
    };
    series?: {
      name: string;
      data: number[];
    }[];
    labels?: string[];
  }

const DonutChart = (props: ExampleProps) => {

    var { title, options } = props;


    if (options == null) {
        options = exampleProps.options;
    }

    if (title == null) {
        title = "Donut Chart";
    }
    
    return (
        <BaseCard title={title}>
            <Chart options={options} series={exampleProps.series} labels={exampleProps.labels} type="donut" style={{width: "100%", height: "100%"}} />
        </BaseCard>
    );
}

export default DonutChart;