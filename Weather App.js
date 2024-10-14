const inputBox = document.getElementById("inputBox");
const Search = document.getElementById("search");
const image = document.getElementById("sun");
const temperature = document.querySelector(".temps");
const city = document.querySelector(".place");
const Humidity = document.querySelector("#humid");
const Wind = document.querySelector("#wind");
const WeatherImage = document.querySelector("#sun");


async function checkWeather(City){
    const api_key="48d1cab3df26a56c3a41728fe024de1e";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
   
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    city.innerHTML = `${weather_data.name}`;

    Humidity.innerHTML = `${weather_data.main.humidity}%`

     Wind.innerHTML = `${weather_data.wind.speed}mph`
    console.log(weather_data);
     
    if(weather_data.weather[0].main == "Clouds"){
        WeatherImage.src = "clouds.png";
    }

    else if(weather_data.weather[0].main == "Clear"){
        WeatherImage.src = "clear.png";
    }

    else if(weather_data.weather[0].main == "Rain"){
        WeatherImage.src = "rain.png";
    }

    else if(weather_data.weather[0].main == "Drizzle"){
        WeatherImage.src = "drizzle.png";
    }

    else if(weather_data.weather[0].main == "Mist"){
        WeatherImage.src = "mist.png";
    }

}


Search.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});