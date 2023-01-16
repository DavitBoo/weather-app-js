import './style.css';

async function getAPI() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=d312249b4176a5f209ed873f062b0c7a');
        const data = await response.json();
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}

// const result = await getAPI()
async function getData() {
    const response = await getAPI()
    console.log(response)
}


getData();