import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#34c38f"],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/getusers").then((response) => {
      const events = response.data.users; // Assuming your API response structure
      const categories = events.map((event) => event.name);
      const dataSeries = events.map((event) => event.total);

      setChartData((prevState) => ({
        ...prevState,
        series: [{ data: dataSeries }],
        options: { ...prevState.options, xaxis: { ...prevState.options.xaxis, categories: categories } },
      }));
    }).catch(error => {
      console.error('Error fetching events:', error);
    });
  }, []);

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height="350"
    />
  );
};

export default BarChart;
