import { searchCity } from './domContent';
import './style.css';

const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-inpuy')

searchBtn.addEventListener('click',  () => {
    let valueToSearch = cityInput.value
    searchCity(valueToSearch);
})




