const axios = require("axios");

async function getWeather(latitude, longitude) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=9&timezone=auto`;

    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    getWeather
};