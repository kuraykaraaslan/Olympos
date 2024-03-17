'use client';
import React from "react";
import BaseCard from "./BaseCard";
import Chart from "react-google-charts";

const AreaChartCard = () => {
    return (
        <BaseCard title="Area Chart">
            <Chart
                width={350}
                height={250}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ["Task", "Hours per Day"],
                    ["Work", 11],
                    ["Eat", 2],
                    ["Commute", 2],
                    ["Watch TV", 2],
                    ["Sleep", 7],
                ]}
                options={{
                    backgroundColor: 'transparent',
                    pieHole: 0.4,
                    is3D: true,
                }}
                rootProps={{ "data-testid": "1" }}
            />
        </BaseCard>
    );
}

export default AreaChartCard;