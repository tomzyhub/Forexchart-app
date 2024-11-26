const fetchForexData = async (symbol = "GBP/USD", interval = "5min") => {
    const API_KEY = "5e53ad18bda742719222ea1972328a2b" ;  
    const BASE_URL =  "https://api.twelvedata.com/time_series";
  
    try {
      const response = await fetch(
        `${BASE_URL}?symbol=${symbol}&apikey=${API_KEY}&interval=${interval}`
      );
  
      const data = await response.json();
  
      // Check if the response has the expected structure
      if (!data || !data.values) {
        console.error("Unexpected API response:", data);
        return [];
      }

      // Transform API data into Lightweight Charts format
      
      const chartData = data.values.map((entry) => ({
        time: new Date(entry.datetime).getTime() / 1000, // Convert to Unix timestamp
        open: parseFloat(entry.open),
        high: parseFloat(entry.high),
        low: parseFloat(entry.low),
        close: parseFloat(entry.close),
      }))
  
      return chartData.reverse()
    } catch (error) {
      console.error("Error fetching forex data:", error);
      return [];
    }
  };
  
  export default fetchForexData;
  