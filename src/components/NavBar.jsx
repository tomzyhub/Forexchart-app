import React from "react";
import TimeframeSelector from "./TimeframeSelector";

const NavBar = ({ timeFrame, setTimeFrame }) => {
  return (
    <>
      <div className="w-5/5 h-16 mx-auto flex items-center justify-center border-5 bg-gray-200">
        <TimeframeSelector timeframe={timeFrame} setTimeframe={setTimeFrame} />
        {/* <select className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <option value="eur/usd">eur/usd</option>
          <option value="eur/usd">Nzd/usd</option>
          <option value="eur/usd">Gbp/usd</option>
          <option value="eur/usd">CHF/usd</option>
          <option value="eur/usd">btc/usd</option>
        </select>
        <select className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <option value="eur/usd">1 min</option>
          <option value="eur/usd">5 min</option>
          <option value="eur/usd">15 min</option>
          <option value="eur/usd">30 min</option>
          <option value="eur/usd">1H</option>
          <option value="eur/usd">1D</option>
        </select> */}
      </div>
    </>
  );
};

export default NavBar;
