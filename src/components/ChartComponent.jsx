import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const ChartComponent = ({ data, width = 800, height = 400 }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Create the chart
    const chart = createChart(chartContainerRef.current, {
      width,
      height,
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#000000",
      },
      grid: {
        vertLines: { color: "#e1e1e1" },
        horzLines: { color: "#e1e1e1" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      priceScale: {
        position: "right",
      },
    });

    // Add a candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#4caf50",
      downColor: "#f44336",
      borderUpColor: "#4caf50",
      borderDownColor: "#f44336",
      wickUpColor: "#4caf50",
      wickDownColor: "#f44336",
    });

    // Set the data for the candlestick series
    if (data) {
      candlestickSeries.setData(data);
    }

    // Cleanup to remove chart instance on unmount
    return () => chart.remove();
  }, [data, width, height]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        position: "relative",
        margin: "0 auto",
      }}
    />
  );
};

export default ChartComponent;
