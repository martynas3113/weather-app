window.addEventListener('load', () => {
    let long;
    let lat;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           long =  position.coords.longitude;
           lat = position.coords.latitude;

           const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=e8fc1f96fd784a1d4401b66853e10254`;

           fetch(api)
            .then(response => {
                return response.text();
                
            })
            console.log(api);
        })
    }
});