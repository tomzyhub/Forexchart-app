import React, { useState } from "react";
import ChartBoardPanel from "./components/ChartBoardPanel";
import NavBar from "./components/NavBar";

function App() {
  const [timeframe, setTimeframe] = useState("1min");
  return (
    <>
      <div className="w-full h-full ">
        <NavBar timeframe={timeframe} setTimeframe={setTimeframe} />
        <ChartBoardPanel timeFrame={timeframe} />
      </div>
    </>
  );
}

export default App;
