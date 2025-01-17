# adaptnxt-weather-service

This is a simple weather service application that fetches and displays weather information based on user input (city or location). The backend is built with Node.js and Express, and it fetches weather data from the Weatherstack API.

## Deployment

The application is deployed on Render and can be accessed at:
[https://adaptnxt-weather-service.onrender.com/weather?city=bangalore](https://adaptnxt-weather-service.onrender.com/weather?city=bangalore)

## Features

- Fetches current weather data for a given city.
- Displays weather information including temperature, weather description, wind speed, pressure, and humidity.

#### Parameters

- `city` (required): The name of the city for which you want to fetch weather data.

#### Response

A JSON object containing the weather information for the specified city.

Example:

```json
{
  "location": "Bangalore",
  "temperature": 25,
  "description": "Partly cloudy",
  "wind_speed": 10,
  "pressure": 1012,
  "humidity": 80
}
```
