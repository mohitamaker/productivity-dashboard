let API_KEY = "YOUR_API_KEY";
let weathersearch = document.querySelector(".weather-search");
let weatherSearchBtn = document.querySelector("#weatherSearchBtn");
let searchCity = document.querySelector("#searchCity");
let weathercard = document.querySelector(".weather-card");

async function fetchData(city) {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        showWeather(data);
    } catch (error) {
        weathercard.innerHTML = `<h2 id="city">City not found</h2>`;
    }
}
function showWeather(data) {
    let clutter = `<h2 id="city">${data.name}</h2>
                        <h5 id="country">${data.sys.country}</h5>
                        <h1 id="temp">${data.main.temp}°C</h1>
                        <h3 id="description">${data.weather[0].description}</h3>`
    weathercard.innerHTML = clutter;
}
weatherSearchBtn.addEventListener('click', (e) => {
    let val="";
    e.preventDefault();
    if (searchCity.value != "") {
        val = searchCity.value;
        console.log(val);
        fetchData(val);
        searchCity.value="";
    }
    
})
