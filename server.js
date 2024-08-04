const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5555;

app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send({ error: "City name is required" });
  }

  const apiKey = process.env.WEATHERSTACK_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    if (response.data.error) {
      return res.status(404).send({ error: "City not found" });
    }

    const weatherData = {
      location: response.data.location.name,
      temperature: response.data.current.temperature,
      description: response.data.current.weather_descriptions[0],
      wind_speed: response.data.current.wind_speed,
      pressure: response.data.current.pressure,
      humidity: response.data.current.humidity,
    };

    res.send(weatherData);
  } catch (error) {
    res.status(500).send({ error: "Unable to fetch weather data" });
  }
});

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});
