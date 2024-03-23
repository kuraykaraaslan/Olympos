'use client';
import React from "react";
import Chart from "react-apexcharts";
import BaseCard from "./BaseCard";


const exampleProps = {
  title: "Bar Chart",
  options : {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      }]
    }]
  }
};



  interface ExampleProps {
    title? : string;
    options?: any;
  }

const BarChart = (props: ExampleProps) => {

    var { title, options } = props;


    if (options == null) {
        options = exampleProps.options;
    }

    if (title == null) {
        title = "Bar Chart";
    }
    
    return (
        <BaseCard title={title}>
            <Chart options={options}  type="bar" style={{width: "100%", height: "100%"}} series={options.series} />
        </BaseCard>
    );
}

export default BarChart;