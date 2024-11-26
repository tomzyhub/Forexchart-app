import React from "react";

const TimeframeSelector = ({ timeframe, setTimeframe }) => {
  const timeframes = ["1min", "5min", "15min", "1h", "1d"];

  return (
    <div className="flex space-x-4">
      {timeframes.map((frame) => (
        <button
          key={frame}
          onClick={() => setTimeframe(frame)}
          className={`px-4 py-2 ${
            timeframe === frame ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          {frame.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;
