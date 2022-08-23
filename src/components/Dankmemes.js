import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const Dankmemes = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: 'levels of thiccness',
          data: [32, 45, 12, 76, 69],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
          // tension: 0.5,
        },
      ],
    });
  }, [])

  return(
    <div className="App">
      <div>
        <Line data={chartData} />
      </div>
    </div>
  )
};

export default Dankmemes