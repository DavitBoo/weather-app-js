import { getData } from "./getData"

const cityText = document.querySelector('.city-text')

export async function searchCity () {
    const data = await getData()
    cityText.innerHTML = data.city
}

