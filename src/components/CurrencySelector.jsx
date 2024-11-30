import React from "react";

const CurrencySelector = ({ currencyPair, setCurrencyPair }) => {
  const currencies = [
    "EURUSD",
    "GBPUSD",
    "USDJPY",
    "USDCHF",
    "AUDUSD",
    "GBPJPY",
  ];

  return (
    <div className="flex space-x-4">
      {currencies.map((pair) => (
        <button
          key={pair}
          onClick={() => setCurrencyPair(pair)}
          className={`px-2 py-2 ${
            currencyPair === pair ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          {pair}
        </button>
      ))}
    </div>
  );
};

export default CurrencySelector;
