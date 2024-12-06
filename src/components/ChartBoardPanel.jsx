import React, { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import fetchForexData from "./utils/forexApi"; // Assuming you have the API function here

const ChartBoardPanel = ({ currencyPair, timeframe }) => {
  const [chartData, setChartData] = useState([]);

  //useState starts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchForexData(currencyPair, timeframe);
      setChartData(data);
    };

    fetchData();
  }, [currencyPair, timeframe]);

  // useState ends.

  return (
    <div className="chart-board">
      {chartData.length > 0 ? (
        <ChartComponent data={chartData} width={1230} height={550} />
      ) : (
        <p className="text-center">Loading chart data...</p>
      )}
    </div>
  );
};

export default ChartBoardPanel;
