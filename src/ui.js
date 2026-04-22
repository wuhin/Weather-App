import { toFahrenheit, capitalize } from "./utils";

export function showLoading() {
    const loadingSpan = document.getElementById("loading");
    if (loadingSpan) loadingSpan.textContent = "Loading...";
}

export function hideLoading() {
    const loadingSpan = document.getElementById("loading");
    if (loadingSpan) loadingSpan.textContent = "";
}

export function displayWeatherInfo(data) {
    const {
        name: city,
        sys: { country },
        main: { feels_like, temp, humidity },
        weather: [{ description }],
        wind: { speed },
    } = data;

    const errorSpan = document.getElementById("error");
    const weatherStatus = document.getElementById("whetherStatus");
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const feelsLIke = document.getElementById("feelsLike");
    const cityHumidity = document.getElementById("humidity");
    const windspeed = document.getElementById("windspeed");

    if (errorSpan) errorSpan.textContent = "";

    weatherStatus.textContent = capitalize(description);
    location.textContent = `${capitalize(city)}, ${country}`;
    temperature.textContent = `${toFahrenheit(temp)}°F`;
    feelsLIke.textContent = `Feels Like: ${toFahrenheit(feels_like)}°F`;
    cityHumidity.textContent = `Humidity: ${humidity}`;
    windspeed.textContent = `Windspeed: ${speed}`;
}

export function displayError(message) {
    const errorSpan = document.getElementById("error");
    if (errorSpan) {
        errorSpan.textContent = message;
    } else {
        console.error(message);
    }
    hideLoading();
}

export function clearContainer() {
    const card = document.getElementById("container");
    if (card) card.textContent = "";
}
