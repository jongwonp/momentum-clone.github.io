const API_KEY = "9659465a20d355ad1e6dac87cd087b4b";

function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    }
    

function onGeoError() {
    alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSucess,onGeoError);