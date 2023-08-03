export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoApioptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b28cdabaamsh60f558292a63a3cp18f9cejsn89db0204bc26",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
const geo = process.env.REACT_APP_GEO_API
console.log('geo',geo)
console.log("geo apoi", process.env.REACT_APP_GEO_API);
console.log("weather apoi", process.env.REACT_APP_WEATHER_API_KEY);
export const WEATHER_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "9a30dfb79ce30be4c139eefa3e688713";

