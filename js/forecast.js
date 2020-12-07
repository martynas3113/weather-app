import { milToDate } from './components/secondsToDay/millisecondsToDate.js';

window.addEventListener('load', () => {
    let long;
    let lat;
    let cardsDOM = document.querySelector('.forecast')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=e8fc1f96fd784a1d4401b66853e10254`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let dataLength = [data.daily.length].join();

                    for (let i = 1; i < dataLength; i++) {
                        let dataTemp = Math.round([data.daily[i].temp.max].join())
                        let dataImg = [data.daily[i].weather[0].icon].join();
                        let dataDate = parseInt([data.daily[i].dt].join(), 10)
                        const HTML = `<div class="card"><p>${milToDate(dataDate)}</p> <img src="./img/icons/${dataImg}.png" alt=""><span>${dataTemp}</span> </div>`
                        cardsDOM.innerHTML += HTML;
                    }

                })
        })
    }
});
