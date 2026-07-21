# Weather-Bot-Dialogflow
# 🌤 Weather Bot using Dialogflow ES & Node.js

A Weather Chatbot that provides **current weather**, **single-day forecasts**, and **8-day weather forecasts** using **Google Dialogflow ES**, **Node.js**, **Express.js**, and the **Open-Meteo API**.

---

## 📌 Project Overview

This chatbot understands natural language queries such as:

- "Weather in Karachi"
- "Weather in Karachi tomorrow"
- "Weather in Karachi on Monday"
- "8-day forecast for Karachi"

The chatbot uses Dialogflow ES for Natural Language Processing (NLP) and a Node.js REST API webhook to retrieve weather data from the Open-Meteo API.

---

## 🚀 Features

- 🌤 Current weather information
- 📅 Forecast for a specific date (up to 8 days)
- 🗓 Complete 8-day weather forecast
- 🌎 City-based weather lookup
- 🤖 Natural language understanding with Dialogflow ES
- 🔗 REST API webhook integration
- ☁ Live weather data using Open-Meteo API

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Google Dialogflow ES | NLP Chatbot |
| Node.js | Backend |
| Express.js | REST API |
| Open-Meteo API | Weather Forecast |
| Open-Meteo Geocoding API | Convert city to coordinates |
| Axios | HTTP Requests |
| Ngrok | Public Webhook URL |
| Git & GitHub | Version Control |

---

# 📂 Project Structure

```
weather-bot-api/
│
├── routes/
│   └── webhook.js
│
├── services/
│   ├── geocode.js
│   └── weather.js
│
├── utils/
│   └── dateHelper.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# ⚙ Installation

## Clone the Repository

```bash
git clone https://github.com/abdulrahimsaeed21-cpu/Weather-Bot-Dialogflow.git
```

Move into the project folder

```bash
cd Weather-Bot-Dialogflow
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
```

Run the server

```bash
node server.js
```

Server starts on

```
http://localhost:3000
```

---

# 🌐 Expose Local Server

Start Ngrok

```bash
ngrok http 3000
```

Copy the generated HTTPS URL and configure it as the webhook URL in Dialogflow ES.

---

# 🤖 Dialogflow Intents

### GetWeather

Provides:

- Current weather
- Weather for today
- Weather for tomorrow
- Weather for a selected date

Example Queries

```
Weather in Karachi

Current weather in Karachi

Weather in Karachi tomorrow

Weather in Karachi on Monday

Karachi weather today
```

---

### Weekly Forecast Intent

Provides weather for the next 8 days.

Example Queries

```
Weekly forecast for Karachi

8-day forecast for Karachi

Weather forecast for next week in Karachi

Show me the forecast for Karachi

Forecast for the next 8 days
```

---

# 🌤 API Used

## Open-Meteo Forecast API

Returns

- Current Temperature
- Feels Like Temperature
- Humidity
- Wind Speed
- Weather Condition
- Daily High Temperature
- Daily Low Temperature
- Weather Forecast

---

## Open-Meteo Geocoding API

Converts a city name into:

- Latitude
- Longitude

which are required for the weather forecast request.

---

# 💬 Sample Chatbot Conversations

### Current Weather

**User**

```
Weather in Karachi
```

**Bot**

```
Current Weather in Karachi

Temperature: 30°C

Feels Like: 34°C

Humidity: 72%

Wind Speed: 14 km/h

Condition: Mainly Clear
```

---

### Tomorrow's Weather

**User**

```
Weather in Karachi tomorrow
```

**Bot**

```
Forecast for Karachi

High: 32°C

Low: 27°C

Condition: Partly Cloudy
```

---

### Weekly Forecast

**User**

```
Weekly forecast for Karachi
```

**Bot**

```
18 Jul - High 31°C Low 27°C

19 Jul - High 30°C Low 27°C

20 Jul - High 31°C Low 28°C

...

25 Jul - High 32°C Low 27°C
```

---

# 📸 Screenshots

Create a folder named

```
screenshots/
```

Add screenshots of:

- Dialogflow Agent
- GetWeather Intent
- Weekly Forecast Intent
- Fulfillment Settings
- Chatbot Testing
- VS Code Project Structure

Example

```
screenshots/
│
├── dialogflow-agent.png
├── getweather-intent.png
├── weekly-intent.png
├── fulfillment.png
├── chatbot-demo.png
└── project-structure.png
```

---

# 👨‍💻 Author

**Abdul Rahim**

Data Science Student

DHA Suffa University

Karachi, Pakistan

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Acknowledgements

- Google Dialogflow ES
- Open-Meteo API
- Node.js
- Express.js
- GitHub

---

## 📬 Contact

If you have any questions or suggestions, feel free to open an issue or contribute to the project.
