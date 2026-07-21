function getForecastIndex(requestedDate) {

    if (!requestedDate) {
        return -1; // No date = current weather
    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const target = new Date(requestedDate);

    target.setHours(0, 0, 0, 0);

    const difference =
        Math.floor((target - today) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        return null;
    }

    if (difference > 7) {
        return null;
    }

    return difference;
}

module.exports = {
    getForecastIndex
};