import axios from "axios";
import { API_KEY, BASE_URL } from "@env";

export const fetchWeather = async (city) => {
  try {
    const currentWeatherResponse = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });

    const weatherForecastResponse = await axios.get(
      `${BASE_URL}/forecast.json`,
      {
        params: {
          key: API_KEY,
          q: city,
          days: 1,
        },
      }
    );

    const forecast = weatherForecastResponse.data.forecast.forecastday[0].hour;
    const requiredTimes = [6, 12, 18, 0];
    const filteredForecast = requiredTimes.map((time) =>
      forecast.find(
        (hour) => parseInt(hour.time.split(" ")[1].split(":")[0]) === time
      )
    );

    return {
      current: currentWeatherResponse.data,
      forecast: filteredForecast,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
