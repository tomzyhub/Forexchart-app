const fetchForexData = async (fromSymbol = "EUR", toSymbol = "USD") => {
    const API_KEY = "P4EQLFZYY8VLY27J"; // Replace with your Alpha Vantage API key
    const BASE_URL = "https://www.alphavantage.co/query";
  
    try {
      const response = await fetch(
        `${BASE_URL}?function=FX_DAILY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&apikey=${API_KEY}`
      );
  
      const data = await response.json();
  
      // Check if the response has the expected structure
      if (!data || !data["Time Series FX (Daily)"]) {
        console.error("Unexpected API response:", data);
        return [];
      }
  console.log(data)
      // Transform API data into Lightweight Charts format
      const timeSeries = data["Time Series FX (Daily)"];
      const chartData = Object.keys(timeSeries).map((date) => ({
        time: date,
        open: parseFloat(timeSeries[date]["1. open"]),
        high: parseFloat(timeSeries[date]["2. high"]),
        low: parseFloat(timeSeries[date]["3. low"]),
        close: parseFloat(timeSeries[date]["4. close"]),
      })).sort((a, b) => new Date(a.time) - new Date(b.time));
  
      return chartData;
    } catch (error) {
      console.error("Error fetching forex data:", error);
      return [];
    }
  };
  
  export default fetchForexData;
  