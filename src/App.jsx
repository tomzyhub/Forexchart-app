import React, { useState } from "react";
import ChartBoardPanel from "./components/ChartBoardPanel";
import NavBar from "./components/NavBar";

function App() {
  const [timeframe, setTimeframe] = useState("1min");

  // let handleTimeFrameChange = (e) => {
  //   // timeframe change logic here
  //   const getValue = e.target.value;
  //   setTimeframe(getValue);
  //   console.log(value);
  // };

  return (
    <>
      <div className="w-full h-full ">
        <NavBar timeframe={timeframe} setTimeframe={setTimeframe} />
        <ChartBoardPanel timeframe={timeframe} />
      </div>
    </>
  );
}

export default App;
