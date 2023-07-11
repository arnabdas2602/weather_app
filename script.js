const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


async function checkWeather(city){
    const api_key ="71ad2f5f980bf7af16216ae3b92647e0";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    {weather_data?weather_data:"Location Not Found"}

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;
    console.log(weather_data);
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/Asseat/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/Asseat/clear.jpeg";
            break;
        case 'Rain':
            weather_img.src = "/Asseat/rain.jpeg";
            break;
        case 'Mist':
            weather_img.src = "/Asseat/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/Asseat/snow.jpeg";
            break;

    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

