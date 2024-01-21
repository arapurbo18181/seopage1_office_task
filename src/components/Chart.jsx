import React from "react";

import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = ({ items }) => {
  const barsData = [];


  for (let i = 0; i < items.length; i += 25) {
    const chunk = items.slice(i, i + 25);
    const dealStatusCount = chunk.filter(
      (item) => item.deal_status === 1
    ).length;
    barsData.push(dealStatusCount);
  }

  const chartData = {
    labels: barsData.map((_, index) => {
        const startId = index * 25;
        const endId = (index + 1) * 25 - 1;
    
        return `${items[startId].id}-${items[endId].id}`;
      }),
    datasets: [
      {
        label: "Deal Status",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: barsData,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: Math.max(...barsData), 
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions}></Bar>
    </div>
  );
};

export default Chart;
