import React, { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import fetchForexData from "./utils/forexApi"; // Assuming you have the API function here

const ChartBoardPanel = ({ timeframe }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForexData("", timeframe);
      setChartData(data);
    };

    fetchData();
  }, [timeframe]);

  return (
    <div className="chart-board">
      {chartData.length > 0 ? (
        <ChartComponent data={chartData} width={1230} height={500} />
      ) : (
        <p className="text-center">Loading chart data...</p>
      )}
      <p>Displaying {timeframe} data</p>
    </div>
  );
};

export default ChartBoardPanel;
