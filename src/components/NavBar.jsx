import React from "react";
import TimeframeSelector from "./TimeframeSelector";
import CurrencySelector from "./CurrencySelector";

const NavBar = ({ timeframe, setTimeframe, currencyPair, setCurrencyPair }) => {
  return (
    <>
      <div className="w-full h-16 flex items-center justify-between bg-gradient-to-r from-blue-400 to-purple-200 px-4 py-2">
        <TimeframeSelector timeframe={timeframe} setTimeframe={setTimeframe} />
        <CurrencySelector
          currencyPair={currencyPair}
          setCurrencyPair={setCurrencyPair}
        />
      </div>
    </>
  );
};

export default NavBar;
