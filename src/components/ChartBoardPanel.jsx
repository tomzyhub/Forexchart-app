import React, { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import fetchForexData from "./utils/forexApi"; // Assuming you have the API function here

const ChartBoardPanel = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForexData("GBP/USDF", "5min");
      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="chart-board">
      {chartData.length > 0 ? (
        <ChartComponent data={chartData} width={1230} height={500} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default ChartBoardPanel;
