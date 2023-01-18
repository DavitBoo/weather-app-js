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

const tempWriter = (t, tempUnits) => {
    return `${tempUnits === 'C' ? kelvinToCelsius(t) : kelvinToFahrenheit(t) } `
}

export {
    getTime,
    getDate,
    kelvinToCelsius,
    kelvinToFahrenheit,
    tempWriter
}