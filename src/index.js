import { searchCity } from './domContent';
import { getLocation } from './getData';
import './style.css';

const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-inpuy')


const successCallback = async (position) => {
    const location = await getLocation(position.coords.longitude, position.coords.latitude)
    searchCity(location.name)
};

const errorCallback = (error) => {
    searchCity(defaultLocation || 'Sevilla')
};

let defaultLocation = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



searchBtn.addEventListener('click',  () => {
    let valueToSearch = cityInput.value
    searchCity(valueToSearch);
})





