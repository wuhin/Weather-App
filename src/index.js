import "./styles.css";

const weatherForm = document.getElementById("searchForm");
const cityInput = document.getElementById("weatherSearch");
const card = document.getElementById("container");

const apiKey = "45e12eb13bea1426d66659846aefd8a8";

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
            console.log(weatherData);
        } catch (error) {
            console.log(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Please enter a city");
    }
    return response.json();
}

function displayWeatherInfo(data) {
    const {
        name: city,
        sys: { country },
        main: { feels_like, temp, humidity },
        weather: [{ description }],
        wind: { speed },
    } = data;

    const weatherStatus = document.getElementById("whetherStatus");
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const feelsLIke = document.getElementById("feelsLike");
    const cityHumidity = document.getElementById("humidity");
    const windspeed = document.getElementById("windspeed");

    weatherStatus.textContent = capitalize(description);
    location.textContent = `${capitalize(city)}, ${country}`;
    temperature.textContent = `${toFahrenheit(temp)}°F`;
    feelsLIke.textContent = `${toFahrenheit(feels_like)}°F`;
    cityHumidity.textContent = humidity;
    windspeed.textContent = speed;
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;

    card.textContent = "";
    card.appendChild(errorDisplay);
}

function toFahrenheit(input) {
    if (!input) return;
    const num = parseInt(input);
    const fahrenheit = (num - 273.15) * 1.8 + 32;
    return fahrenheit.toFixed(0);
}

function capitalize(input) {
    const str = input.trim();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
