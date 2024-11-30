import React, { useState } from "react";
import ChartBoardPanel from "./components/ChartBoardPanel";
import NavBar from "./components/NavBar";

function App() {
  const [timeframe, setTimeframe] = useState("1min");
  const [currencyPair, setCurrencyPair] = useState("EURUSD");
  return (
    <>
      <div className="w-full h-full ">
        <NavBar
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          currencyPair={currencyPair}
          setCurrencyPair={setCurrencyPair}
        />
        <ChartBoardPanel timeframe={timeframe} currencyPair={currencyPair} />
      </div>
    </>
  );
}

export default App;
