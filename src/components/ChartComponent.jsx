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

    chart.applyOptions({
      crosshair: {
        mode: 0, // Normal crosshair
        vertLine: {
          color: "#6A5ACD",
          width: 1,
          style: 0,
        },
        horzLine: {
          color: "#6A5ACD",
          width: 1,
          style: 0,
        },
        layout: {
          backgroundColor: "#282c34",
          textColor: "#ffffff",
        },
        grid: {
          vertLines: { color: "#444" },
          horzLines: { color: "#444" },
        },
      },
    });

    chart.subscribeCrosshairMove((param) => {
      console.log("Crosshair moved", param);
    });

    chart.addAreaSeries({
      topColor: "rgba(33, 150, 243, 0.56)",
      bottomColor: "rgba(33, 150, 243, 0.04)",
      lineColor: "rgba(33, 150, 243, 1)",
      lineWidth: 2,
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
    chart.timeScale().scrollToRealTime(); // Scroll to the latest data
    chart.timeScale().fitContent(); // Fit all candlesticks on the screen

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
