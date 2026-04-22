import "./styles.css";
import { getWeatherData } from "./weatherService.js";
import {
    displayWeatherInfo,
    displayError,
    showLoading,
    hideLoading,
} from "./ui.js";

const weatherForm = document.getElementById("searchForm");
const cityInput = document.getElementById("weatherSearch");

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        showLoading();
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
            console.log(weatherData);
        } catch (error) {
            console.log(error);
            displayError(error);
        } finally {
            hideLoading();
        }
    } else {
        displayError("Please enter a city");
    }
});

(async () => {
    showLoading();
    setTimeout(async () => {
        try {
            const bostonWeather = await getWeatherData("Boston");
            displayWeatherInfo(bostonWeather);
            cityInput.value = "Boston";
        } catch (error) {
            console.error(error);
            displayError("Could not load weather for Boston");
        } finally {
            hideLoading();
        }
    }, 3000);
})();
