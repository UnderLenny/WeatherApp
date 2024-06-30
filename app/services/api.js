import axios from "axios";
import { API_KEY, BASE_URL } from "@env";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: "2a90099cc6a24f89a7d65054243006",
        q: city,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
