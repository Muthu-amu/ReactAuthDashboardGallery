import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Logins',
        data: [10, 5], // Example data
      },
    ],
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: ['Total Logins', 'Individual Logins'],
      },
      colors: ['#1890ff', '#2fc25b'],
    },
  });

  useEffect(() => {
    // Fetch login data from backend or Firebase
    // Update state with fetched data
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Dashboard</h2>
      <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default Dashboard;
