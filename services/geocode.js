const axios = require("axios");

async function getCoordinates(city) {

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;

    const response = await axios.get(url);

    if (!response.data.results || response.data.results.length === 0) {
        throw new Error("City not found");
    }

    const place = response.data.results[0];

    return {
        name: place.name,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude
    };
}

module.exports = {
    getCoordinates
};