import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import fetchForexData from "./utils/forexApi"; // Adjust the path as necessary
const ChartBoardPanel = () => {
  const chartContainerRef = useRef(null);
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchForexData("USD/JPY");
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
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#000000",
      },
      grid: {
        vertLines: {
          color: "#e1e1e1",
        },
        horzLines: {
          color: "#e1e1e1",
        },
      },
      timeScale: {
        timeVisible: true, // Ensure time (date/hour) is shown on the x-axis
        secondsVisible: false, // Disable seconds (optional)
      },
      priceScale: {
        position: "right", // Show price scale on the right
      },
    });

    // Add a candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#4caf50",
      downColor: "#f44336",
      borderDownColor: "#f44336",
      borderUpColor: "#4caf50",
      wickDownColor: "#f44336",
      wickUpColor: "#4caf50",
    });

    // Dummy data (replace with API data later)
    candlestickSeries.setData(ApiData);

    // Clean up on unmount
    return () => chart.remove();
  }, [ApiData]);

  return (
    <>
      <div
        ref={chartContainerRef}
        className="flex w-5/5 h-max mt-3 border-2 items-center justify-center"
      ></div>
    </>
  );
};

export default ChartBoardPanel;
