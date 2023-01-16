export async function getData(valueToSearch) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${valueToSearch}&appid=d312249b4176a5f209ed873f062b0c7a`, { mode: "cors" });
        const data = await response.json();
        console.log(data)
        const dataReq = {
            city: data.city.name,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            list: data.list
        }
        console.log(dataReq)
        return dataReq

    } catch (error) {
        console.log(error)
    }
}
