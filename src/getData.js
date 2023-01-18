async function getData(valueToSearch) {
    console.log(valueToSearch)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${valueToSearch}&appid=d312249b4176a5f209ed873f062b0c7a`
    try {
        const response = await fetch( url , { mode: "cors" });
        const data = await response.json();
        console.log(data)
        const mainData = {
            city: data.city.name,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            list: data.list
        }
        console.log(mainData)
        return mainData

    } catch (error) {
        console.log(error)
    }
}

async function getLocation(lon, lat) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&appid=d312249b4176a5f209ed873f062b0c7a`

    try {
        const data = await fetch(url, { mode: "cors" });
        const response = data.json();
        return response
    } catch (error) {
        console.log(error)
    }
}

async function getBackground(q) {
    try {
        const url = `https://pixabay.com/api/?key=24426393-c3ed339720510506c1c2ff54e&q=${q}+landscape`
        const data = await fetch(url, { mode: "cors" });
        const response = await data.json();
        console.log(response)
        return response
    } 
    catch (error) {
        console.log(error)
    }

}


export {
    getData,
    getLocation,
    getBackground
}