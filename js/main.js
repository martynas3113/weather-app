import { formatDate } from './formattedDate.js';

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescriptionDOM = document.querySelector('.info > h3');
    let temperatureDegreeDOM = document.querySelector('.degree > p');
    let locationDOM = document.querySelector('.location > h1');
    let iconDOM = document.querySelector('.info > .image')
    let dateDOM = document.querySelector('.date');
    let feelsDOM = document.querySelector('.info > p');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           long =  position.coords.longitude;
           lat = position.coords.latitude;

           const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=e8fc1f96fd784a1d4401b66853e10254`;
           fetch(api)
            .then(response => {
                return response.json();
                
            })
            .then(data => {
                const temperature = Math.round(data.main.temp)
                const location = data.name;
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                const date = formatDate();
                const feels  = Math.round(data.main.feels_like);
                

                temperatureDescriptionDOM.textContent = description;
                temperatureDegreeDOM.textContent = temperature;
                locationDOM.textContent = location;
                // iconDOM.innerHTML = ;
                dateDOM.textContent = date;
                iconDOM.innerHTML = `<img class="image" src="./img/icons/${icon}.png" alt="">`
                feelsDOM.textContent = feels;


                
            })

        })
    }
})