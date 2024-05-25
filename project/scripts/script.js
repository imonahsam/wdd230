const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=6.32691&lon=5.60750&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const sunriseSunset = document.getElementById('sunrise-sunset');
const errorMessage = document.getElementById('error-message');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    getWeatherData(city);
});

async function getWeatherData(city) {
    try {
        // Fetch data from OpenWeatherMap API
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        // Display the weather data
        displayWeatherData(data);
    } catch (error) {
        // Attempt to load from local cache
        loadFromCache(city);
    }
}

function displayWeatherData(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${temp}°C`;
    weatherDescription.textContent = `Weather: ${description}`;
    sunriseSunset.textContent = `Sunrise: ${sunrise} | Sunset: ${sunset}`;
    errorMessage.textContent = '';
}

async function loadFromCache(city) {
    try {
        const response = await fetch('cachedData.json');
        const cacheData = await response.json();

        if (cacheData[city]) {
            const data = cacheData[city];
            cityName.textContent = city;
            temperature.textContent = `Temperature: ${data.temperature}`;
            weatherDescription.textContent = `Weather: ${data.description}`;
            sunriseSunset.textContent = `Sunrise: ${data.sunrise} | Sunset: ${data.sunset}`;
            errorMessage.textContent = '';
        } else {
            throw new Error('City not found in cache');
        }
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}
