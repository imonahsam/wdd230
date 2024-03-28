const currentTemp = document.getElementById('current-temp');

const currentDesc = document.getElementById('description');

const weatherIcon = document.getElementById('weather-icon');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.32691&lon=5.60750&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

    const desc = data.weather[0].description;

    currentDesc.innerHTML = `- ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather");    

}
