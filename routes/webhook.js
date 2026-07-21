const express = require("express");
const router = express.Router();

const geo = require("../services/geocode");
const weather = require("../services/weather");
const helper = require("../utils/dateHelper");

function weatherDescription(code) {

    const map = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Heavy drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Light snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Rain showers",
        81: "Heavy rain showers",
        82: "Violent rain showers",
        95: "Thunderstorm"
    };

    return map[code] || "Unknown";
}

router.post("/", async (req, res) => {

    try {

        const params = req.body.queryResult.parameters;

        const city = params.city;

        const date =
            params.date ||
            params["date-time"] ||
            "";

        const duration = params.duration;
        const datePeriod = params["date-period"];

        const intent = req.body.queryResult.intent.displayName;

        console.log("--------------------------------");
        console.log("Intent:", intent);
        console.log("City:", city);
        console.log("Date:", date);
        console.log("Duration:", duration);
        console.log("Date Period:", datePeriod);

        const location = await geo.getCoordinates(city);

        const forecast = await weather.getWeather(
            location.latitude,
            location.longitude
        );

        // ==========================================
        // WEEKLY FORECAST
        // ==========================================

        if (intent === "weekly intent") {

            let message =
`📅 8-Day Weather Forecast for ${location.name}, ${location.country}

`;

            for (let i = 0; i < forecast.daily.time.length; i++) {

                const day = new Date(forecast.daily.time[i])
                    .toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric"
                    });

                message +=
`${day}

🌡 High: ${forecast.daily.temperature_2m_max[i]}°C
🌡 Low: ${forecast.daily.temperature_2m_min[i]}°C
☁️ ${weatherDescription(forecast.daily.weather_code[i])}

`;
            }

            return res.json({
                fulfillmentText: message
            });
        }

        // ==========================================
        // CURRENT WEATHER
        // ==========================================

        const index = helper.getForecastIndex(date);

        if (index === -1) {

            const current = forecast.current;

            return res.json({

                fulfillmentText:
`🌤 Current Weather in ${location.name}, ${location.country}

🌡 Temperature: ${current.temperature_2m}°C

🤒 Feels Like: ${current.apparent_temperature}°C

💧 Humidity: ${current.relative_humidity_2m}%

💨 Wind Speed: ${current.wind_speed_10m} km/h

☁️ Condition: ${weatherDescription(current.weather_code)}`

            });

        }

        // ==========================================
        // DATE OUT OF RANGE
        // ==========================================

        if (index === null) {

            return res.json({
                fulfillmentText:
"I can only provide forecasts for today and the next 8 days."
            });

        }

        // ==========================================
        // SINGLE DAY FORECAST
        // ==========================================

        return res.json({

            fulfillmentText:
`📅 Weather Forecast for ${location.name}, ${location.country}

📅 Date: ${forecast.daily.time[index]}

🌡 High: ${forecast.daily.temperature_2m_max[index]}°C

🌡 Low: ${forecast.daily.temperature_2m_min[index]}°C

☁️ Condition: ${weatherDescription(forecast.daily.weather_code[index])}`

        });

    }

    catch (err) {

        console.error(err);

        return res.json({
            fulfillmentText:
"Sorry, I couldn't retrieve the weather information."
        });

    }

});

module.exports = router;