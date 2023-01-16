export async function getData() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=d312249b4176a5f209ed873f062b0c7a', { mode: "cors" });
        const data = await response.json();
        console.log(data)
        const dataReq = {
            city: data.city.name,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            list: data.list
        }
        return dataReq

    } catch (error) {
        console.log(error)
    }
}
