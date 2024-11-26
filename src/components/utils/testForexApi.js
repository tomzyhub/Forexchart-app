import fetchForexData from "./forexApi";

const testForexApi = async () => {
  const data = await fetchForexData("EUR", "USD");
  console.log("Fetched Forex Data:", data);

  if (data.length > 0) {
    console.log("API fetch successful, data ready for the chart.");
  } else {
    console.log("API fetch failed or returned no data.");
  }
};

testForexApi();


export default testForexApi;