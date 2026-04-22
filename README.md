# 🌤️ Weather App

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-blue?style=for-the-badge&logo=openweathermap&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![VS Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

A clean, modular weather application that displays current weather conditions for any city. Built with vanilla JavaScript, HTML, and CSS, using the OpenWeatherMap API.

## ✨ Features

- **Search by city** – enter any city name to get current weather
- **Default city load** – automatically shows Boston weather on page load
- **Loading indicator** – visual feedback while fetching data
- **Error handling** – user-friendly messages for invalid cities or network issues
- **Temperature conversion** – Kelvin to Fahrenheit (displayed with degree symbol)
- **Weather details**:
- Temperature (°F)
- Feels like (°F)
- Humidity (%)
- Wind speed (mph)
- Weather description (e.g., "clear sky", "light rain")

## Tech Stack

**Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+)  
 **API** | [OpenWeatherMap Current Weather Data](https://openweathermap.org/current)  
 **JavaScript** | ES Modules (`import/export`), Fetch API, Async/Await, DOM manipulation

## API Used

- **Name**: OpenWeatherMap Current Weather API
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
    - `q` – city name (e.g., "London")
    - `appid` – your personal API key
- **Response format**: JSON

> ⚠️ **Note**: You need to obtain a free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to run this app.

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git

# Navigate into the directory
cd weather-app

# Install dependencies
npm run build

# Start the development server
npm run start
```
