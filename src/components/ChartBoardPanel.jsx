import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import fetchForexData from "./utils/forexApi"; // Adjust the path as necessary
const ChartBoardPanel = () => {
  const chartContainerRef = useRef(null);
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchForexData("EUR", "USD");
      setApiData(data);
    };

    loadChartData();
  }, []);

  useEffect(() => {
    if (ApiData.length === 0) return;
    // Initialize the chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 400,
    });

    // Add a candlestick series
    const candlestickSeries = chart.addCandlestickSeries();

    // Dummy data (replace with API data later)
    candlestickSeries.setData(ApiData);

    // Clean up on unmount
    return () => chart.remove();
  }, [ApiData]);

  return (
    <>
      <div
        ref={chartContainerRef}
        className="flex w-5/5 h-5/6 mt-3 border-2 items-center justify-center"
      ></div>
    </>
  );
};

export default ChartBoardPanel;
