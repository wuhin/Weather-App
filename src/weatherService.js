const apiKey = "45e12eb13bea1426d66659846aefd8a8";

export async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Please enter a city");
    }
    return response.json();
}
