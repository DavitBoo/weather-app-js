import { getData } from "./getData"
import { cloudI } from "./weatherIcons"



const cityText = document.querySelector('.city-text')
const weatherText = document.querySelector('.weather-text')
const temperatureText = document.querySelector('.temperature-text')
const hightTemp = document.querySelector('.high-temp')
const lowTemp = document.querySelector('.low-temp')

const hourlyWeatherContainer = document.querySelector('.weather-per-hours')

const sunriseTime = document.querySelector('.sunriseTime')
const sunsetTime = document.querySelector('.sunsetTime')


export async function searchCity (valueToSearch) {
    const data = await getData(valueToSearch)

    cityText.innerHTML = data.city
    weatherText.innerHTML = data.list[0].weather[0].main
    temperatureText.innerHTML = `${(data.list[0].main.temp -273).toFixed(1)} ºC`
    hightTemp.innerHTML = `${(data.list[0].main.temp_max -273).toFixed(1)} ºC`
    lowTemp.innerHTML = `${(data.list[0].main.temp_min -273).toFixed(1)} ºC`

    data.list.forEach((time, i) => {
        hourlyWeatherContainer.innerHTML += `
            <div class="each-hour d-flex-col">
                <div class="time-text">${time.dt_txt.split(' ')[1]}</div>
                <div class="weather-icon">${cloudI}</div>
                <div class="temp-at-time">${(time.main.temp -273).toFixed(1)} ºC</div>
            </div>
        `
    });

    sunriseTime.innerHTML = getTime(data.sunrise)
    console.log(sunsetTime)
    sunsetTime.innerHTML = getTime(data.sunset)
}

const getTime = dateTime => {
    let readable_date = new Date(dateTime*1000);
    let hour = readable_date.getHours()
    let minutes = readable_date.getMinutes()
    return `${hour}:${minutes <= 9 ? '0' + minutes : minutes}`

}

