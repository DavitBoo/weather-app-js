import { getBackground, getData } from "./getData"
import { arrowI, cloudI } from "./weatherIcons"

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

tempUnitsBtn.addEventListener('click', () => {
    if(tempUnits === "C") tempUnits = 'F'
    else tempUnits = 'C'
    cel.classList.toggle('fw600')
    fah.classList.toggle('fw600')
})

export async function searchCity (valueToSearch) {
    const data = await getData(valueToSearch)

    cityText.innerHTML = data.city
    weatherText.innerHTML = data.list[0].weather[0].main
    temperatureText.innerHTML = tempWriter(data.list[0].main.temp)
    hightTemp.innerHTML = tempWriter(data.list[0].main.temp_max)
    lowTemp.innerHTML = tempWriter(data.list[0].main.temp_min)

    hourlyWeatherContainer.innerHTML = ''

    data.list.forEach((time, i) => {
        hourlyWeatherContainer.innerHTML += `
            <div class="each-hour d-flex-col">
                <div class="time-text">${getDate(time.dt)}</div>
                <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png"></img></div>
                <div class="temp-at-time">${tempWriter(time.main.temp)} </div>
            </div>
        `
        console.log(tempWriter(time.main.temp))
    });

    sunriseTime.innerHTML = getTime(data.sunrise)
    sunsetTime.innerHTML = getTime(data.sunset)
    chanceOfRain.innerHTML = data.list[0].pop * 100 + '%'
    humidity.innerHTML =  data.list[0].main.humidity + '%'
    wind.innerHTML = `${arrowI(data.list[0].wind.deg)} ${data.list[0].wind.speed} km/h`
    feelLike.innerHTML = tempWriter(data.list[0].main.feels_like);
    precipitation.innerHTML = `${data.list[0].rain ? data.list[0].rain['3h'] : (data.list[0].snow ? data.list[0].snow['3h'] : '0') } m<sup>3</sup>`
    pressure.innerHTML = data.list[0].main.pressure + 'hPa' 
    visibility.innerHTML = `${data.list[0].visibility > 9999 ? 'max.' : data.list[0].visibility / 1000 + 'km'}  `
    cloudy.innerHTML =  data.list[0].clouds.all + '%'

    const imgUrl = await getBackground(data.list[0].weather[0].main)
    console.log(imgUrl)
    body.style.backgroundImage = `linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${imgUrl.hits[0].largeImageURL})`
}

const getTime = dateTime => {
    let readable_date = new Date(dateTime*1000);
    let hour = readable_date.getHours()
    let minutes = readable_date.getMinutes()
    return `${hour}:${minutes <= 9 ? '0' + minutes : minutes}`
}

const getDate = date => {
    let readable_date = new Date(date*1000);
    let hour = readable_date.getHours()
    let day = readable_date.getDate()
    let month = readable_date.getMonth() + 1
    return `${day}/${month} ${hour}:00`
}


const kelvinToCelsius = t => {
    return `${(t - 273.15).toFixed(1)} ºC`
}

const kelvinToFahrenheit = t => {
    return `${((t - 273.15) * 9 / 5 + 32).toFixed(1)} ºF`
}

const tempWriter = t => {
    return `${tempUnits === 'C' ? kelvinToCelsius(t) : kelvinToFahrenheit(t) } `
}
