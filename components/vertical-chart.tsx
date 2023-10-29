import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { getChartData } from "../services/user-details.service";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const chartDataResponse = {
  datasets: [],
  labels: [],
};

export default function VerticalChart() {
  const [chartData, setChartData] = useState<any>(chartDataResponse);
  console.log(chartData);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  useEffect(() => {
    getChartDataFromContentful();
  }, []);

  const getChartDataFromContentful = async () => {
    const res: any = await getChartData();

    const data = {
      datasets: [res.fields?.dataset1, res.fields?.dataset2],
      labels,
    };
    setChartData(data);
  };

  return <Bar options={options} data={chartData} />;
}
