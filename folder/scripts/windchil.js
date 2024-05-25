// const temperature = document.getElementById('temperature');
// let newTemperature = 50;
// temperature.innerHTML += newTemperature + `&deg;F`;

// const speed = document.getElementById('speed');
// let newSpeed = 4;
// speed.innerHTML += newSpeed + ` km/h`;

// function windchill(t, s) {
//     let windChill = (35.74 + (0.6215 * t)) - ((35.75) * (s ** 0.16)) + ((0.4275 * t * (s ** 0.16)))
//     return windChill;
// }

// const chill = document.getElementById('chill');
// let windChill = windchill(newTemperature, newSpeed);
// chill.innerHTML += windChill.toFixed() + `&deg;F`;

const currentTemp = document.getElementById('current-temp');

const currentDesc = document.getElementById('description');

const div = document.querySelector('#more-info');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.32691&lon=5.60750&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

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

    const weather = data.list[0];

    const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather");
    weatherIcon.setAttribute('width', '50px');
    weatherIcon.setAttribute('height', '50px');
    document.querySelector('.info').appendChild(weatherIcon);

    currentTemp.innerHTML = `${weather.main.temp.toFixed(0)}&deg;F`;

    const desc = weather.weather[0].description;

    currentDesc.innerHTML = `- ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;
    div.appendChild(humidity);

    const windSpeed = document.createElement('p');
    windSpeed.innerHTML = `Wind Speed: ${weather.wind.speed}km/h`;
    div.appendChild(windSpeed);


    //FORECAST FOR 3 DAYS


    let allDays = [];
    allDays.push(data.list[8]);
    allDays.push(data.list[16]);
    allDays.push(data.list[24]);

    allDays.forEach((day) => {

        const section = document.createElement('section');

        const date = document.createElement('h4');
        date.innerHTML = `${day.dt_txt.slice(0, 10)}`;

        const dayTemp = document.createElement('p');
        dayTemp.innerHTML =`${day.main.temp.toFixed(0)}&deg;F`;

        const forecastIcon = document.createElement('img');
        const icon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
        forecastIcon.setAttribute('src', icon);
        forecastIcon.setAttribute('alt', "forecast-image"); 
        forecastIcon.setAttribute('width', '50px');
        forecastIcon.setAttribute('height', '50px');



        const upper = day.weather[0].description; 
        const dayDesc = document.createElement('p');
        dayDesc.innerHTML = `${upper.charAt(0).toUpperCase() + upper.slice(1)}`;

        section.append(date, dayTemp, forecastIcon, dayDesc);
        document.querySelector('#forecast').appendChild(section);
        
    }); 

}
