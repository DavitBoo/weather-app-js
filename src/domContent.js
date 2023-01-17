import { getData } from "./getData"
import { arrowI, cloudI } from "./weatherIcons"


const cityText = document.querySelector('.city-text')
const weatherText = document.querySelector('.weather-text')
const temperatureText = document.querySelector('.temperature-text')
const hightTemp = document.querySelector('.high-temp')
const lowTemp = document.querySelector('.low-temp')

const hourlyWeatherContainer = document.querySelector('.weather-per-hours')

const sunriseTime = document.querySelector('.sunriseTime')
const sunsetTime = document.querySelector('.sunsetTime')
const chanceOfRain = document.querySelector('.chance-of-rain')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const feelLike = document.querySelector('.feels-like')
const precipitation = document.querySelector('.precipitation')
const pressure = document.querySelector('.pressure')
const visibility = document.querySelector('.visibility')
const weather = document.querySelector('.weather')

// const tempUnitsBtn = document.getElementById('temp-units-btn')
// let tempUnits = "C"

// tempUnitsBtn.addEventListener('click', () => {
//     if(tempUnits === "C") tempUnits = 'F'
//     else tempUnits = 'C'
// })

export async function searchCity (valueToSearch) {
    const data = await getData(valueToSearch)

    cityText.innerHTML = data.city
    weatherText.innerHTML = data.list[0].weather[0].main
    temperatureText.innerHTML = `${(data.list[0].main.temp -273).toFixed(1)} ºC`
    hightTemp.innerHTML = `${(data.list[0].main.temp_max -273).toFixed(1)} ºC`
    lowTemp.innerHTML = `${(data.list[0].main.temp_min -273).toFixed(1)} ºC`

    data.list.forEach((time, i) => {
        console.log(time.dt_txt)
        hourlyWeatherContainer.innerHTML += `
            <div class="each-hour d-flex-col">
                <div class="time-text">${time.dt_txt.split(' ')[1]}</div>
                <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png"></img></div>
                <div class="temp-at-time">${(time.main.temp -273).toFixed(1)} ºC</div>
            </div>
        `
    });

    sunriseTime.innerHTML = getTime(data.sunrise)
    sunsetTime.innerHTML = getTime(data.sunset)
    chanceOfRain.innerHTML = data.list[0].pop * 100 + '%'
    humidity.innerHTML =  data.list[0].main.humidity + '%'
    wind.innerHTML = `${arrowI(data.list[0].wind.deg)} ${data.list[0].wind.speed} km/h`
    feelLike.innerHTML = `${(data.list[0].main.feels_like-273).toFixed(1)} ºC`
    precipitation.innerHTML = `${data.list[0].rain ? data.list[0].rain['3h'] : (data.list[0].snow ? data.list[0].snow['3h'] : '0') } m<sup>3</sup>`
    pressure.innerHTML = data.list[0].main.pressure + 'hPa' 
    visibility.innerHTML = `${data.list[0].visibility > 9999 ? 'max.' : data.list[0].visibility / 1000 + 'km'}  `
    weather.innerHTML =  `<img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"></img>`
}

const getTime = dateTime => {
    let readable_date = new Date(dateTime*1000);
    let hour = readable_date.getHours()
    let minutes = readable_date.getMinutes()
    return `${hour}:${minutes <= 9 ? '0' + minutes : minutes}`
}


// const kelvinToCelsius = t => {
//     return `${(t - 273,15).toFixed(1)} ºC`
// }

// const kelvinToFahrenheit = t => {
//     return `${((t - 273,15) * 9 / 5 + 32).toFixed(1)} ºF`
// }
