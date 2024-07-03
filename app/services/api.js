import axios from "axios";
import { API_KEY, BASE_URL } from "@env";
import { format } from "date-fns";

const date = format(new Date(), "yyyy-MM-dd");

export const fetchWeather = async (city, requiredTime) => {
  try {
    const currentWeatherResponse = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });

    const weatherTimeRangeResponse = await axios.get(
      `${BASE_URL}/forecast.json`,
      {
        params: {
          key: API_KEY,
          q: city,
          days: 1,
          dt: date,
          hour: requiredTime,
        },
      }
    );

    return {
      current: currentWeatherResponse.data,
      forecast: weatherTimeRangeResponse.data,
    };
  } catch (err) {
    console.error(err);
  }
};
