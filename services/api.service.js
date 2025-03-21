import https from "https";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error("API doesn't exist, -t [API_KEY] for saving token");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather };
