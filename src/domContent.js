import { getDate, getTime, tempWriter } from "./auxFunctions"
import { getBackground, getData } from "./getData"
import { arrowI } from "./weatherIcons"

const body = document.querySelector('body')

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
const cloudy = document.querySelector('.cloudy')

const tempUnitsBtn = document.getElementById('temp-units-btn')
let tempUnits = "C"

const cel = document.getElementById('cel')
const fah = document.getElementById('fah')
let lastSearchedTown

tempUnitsBtn.addEventListener('click', async () => {
    if(tempUnits === "C") tempUnits = 'F'
    else tempUnits = 'C'
    cel.classList.toggle('fw600')
    fah.classList.toggle('fw600')
    searchCity(lastSearchedTown)
})



export async function searchCity (valueToSearch) {
    lastSearchedTown = valueToSearch;
    const data = await getData(valueToSearch)

    const currentData = data.list[0]

    cityText.innerHTML = data.city
    weatherText.innerHTML = currentData.weather[0].main
    temperatureText.innerHTML = tempWriter(currentData.main.temp, tempUnits)
    hightTemp.innerHTML = tempWriter(currentData.main.temp_max, tempUnits)
    lowTemp.innerHTML = tempWriter(currentData.main.temp_min, tempUnits)

    hourlyWeatherContainer.innerHTML = ''

    data.list.forEach((time, i) => {
        hourlyWeatherContainer.innerHTML += `
            <div class="each-hour d-flex-col">
                <div class="time-text">${getDate(time.dt)}</div>
                <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png"></img></div>
                <div class="temp-at-time">${tempWriter(time.main.temp, tempUnits)} </div>
            </div>
        `
    });

    sunriseTime.innerHTML = getTime(data.sunrise)
    sunsetTime.innerHTML = getTime(data.sunset)
    chanceOfRain.innerHTML = currentData.pop * 100 + '%'
    humidity.innerHTML =  currentData.main.humidity + '%'
    wind.innerHTML = `${arrowI(currentData.wind.deg)} ${currentData.wind.speed} km/h`
    feelLike.innerHTML = tempWriter(currentData.main.feels_like, tempUnits);
    precipitation.innerHTML = `${currentData.rain ? currentData.rain['3h'] : (currentData.snow ? currentData.snow['3h'] : '0') } m<sup>3</sup>`
    pressure.innerHTML = currentData.main.pressure + 'hPa' 
    visibility.innerHTML = `${currentData.visibility > 9999 ? 'max.' : currentData.visibility / 1000 + 'km'}  `
    cloudy.innerHTML =  currentData.clouds.all + '%'

    const imgUrl = await getBackground(currentData.weather[0].main)
    body.style.backgroundImage = `linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${imgUrl.hits[0].largeImageURL})`
}



