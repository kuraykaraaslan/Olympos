'use client';
import React from "react";
import BaseCard from "./BaseCard";
import { Chart } from "react-google-charts";

const columns = [
    { type: "string", id: "President" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];
  
  const rows = [
    ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ];
  
  export const data = [columns, ...rows];
  

const TimeLineCard = () => {
    return (
        <BaseCard title="Pie Chart">
            <Chart chartType="Timeline" data={data} width="100%" height="250px" />

        </BaseCard>
    );
}

export default TimeLineCard;