import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#374151',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          color: '#374151',
        },
      },
      x: {
        ticks: {
          color: '#374151',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm h-[400px]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {coinName} Price Chart
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 text-sm text-gray-600">
          <span className="mb-1 sm:mb-0">Change: {coinHistory?.data?.change}%</span>
          <span>
            Current {coinName} Price: ${currentPrice}
          </span>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
