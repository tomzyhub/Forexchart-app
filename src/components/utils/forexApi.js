const fetchForexData = async (symbol, timeframe) => {
  const API_KEY = "5yejwYyfeqK7_WtIHZJDqmdE5blsnVOE";
  const BASE_URL = "https://api.polygon.io/v2/aggs/ticker/C:EURUSD";
  const resolutionMap = {
    "1min": "1/minute",
    "5min": "5/minute",
    "1h": "1/hour",
    "1d": "1/day",
  };
  const resolution = resolutionMap[timeframe] || "1/minute";
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7); // Fetch data from the last 7 days
  const formattedFrom = fromDate.toISOString().split("T")[0];
  const toDate = new Date().toISOString().split("T")[0]; // Current date

  const url = `${BASE_URL}${symbol}/range/${resolution}/${formattedFrom}/${toDate}?apiKey=${API_KEY}`;

  try {
    console.log("Fetching data from URL:", url);
    const response = await fetch(url);

    if (!response.ok) {
      console.error("HTTP Status:", response.status, response.statusText);
      throw new Error("Failed to fetch data: " + response.statusText);
    }

    const json = await response.json();
    if (!json.results) {
      throw new Error("No results returned");
    }

    return json.results.map((data) => ({
      time: data.t / 1000, // Convert from milliseconds to seconds
      open: data.o,
      high: data.h,
      low: data.l,
      close: data.c,
    }));
  } catch (error) {
    console.error("Error fetching forex data:", error);
    return [];
  }
};

export default fetchForexData;
