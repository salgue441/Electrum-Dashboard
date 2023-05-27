import React from "react";

// Mui
import { Box } from "@mui/material";

// Theme
import { tokens } from "../../theme";

// Chart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * @brief
 * Renders a linear graph with the given data
 * @param {Object} data - The data to be rendered in the graph
 * @param {Object} labels - The labels for the data
 * @return {JSX} - The graph component
 */
const linearPlot = ({ data, labels, theme }) => {
  const colors = tokens(theme.palette.mode);

  console.log("data: ", data);
  console.log("labels: ", labels);

  // Prepare the dataset
  const dataset = {
    data: data.slice(0, 54).map((entry) => entry.value),
    fill: false,
    borderColor: colors.greenAccent[500],
    borderWidth: 2,
    pointRadius: 0,
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Speed vs Time",
        position: "top",
        fullSize: true,
        align: "center",
        padding: 20,
        color: colors.greenAccent[400],
        font: {
          size: 24,
        },
      },
    },
    scales: {
      y: {
        max: 200,
        min: 0,
        grid: {
          color: colors.greenAccent[100],
        },
        ticks: {
          stepSize: 10,
          color: colors.greenAccent[300],
        },
        title: {
          display: true,
          text: "Speed (km/h)",
          color: colors.greenAccent[400],
        },
      },
      x: {
        grid: {
          color: colors.greenAccent[100],
        },
        ticks: {
          color: colors.greenAccent[300],
        },
        title: {
          display: true,
          text: "Time (s)",
          color: colors.greenAccent[400],
        },
      },
    },
  };

  // Curating the data
  const custom_dataset = {
    data: data,
    fill: false,
    borderColor: colors.greenAccent[500],
    borderWidth: 2,
    pointRadius: 0,
  };

  const chartData = {
    labels: labels,
    datasets: [custom_dataset],
  };

  return (
    <Box maxHeight={550} width="100%" display="block">
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default linearPlot;
