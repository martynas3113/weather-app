function changeBack(){
    const currentTime = new Date().getHours();
    if(currentTime < 6) {
        document.querySelector('body').style.backgroundImage = "url(../img/night.png)";
    }
    if(currentTime > 6 && currentTime < 12) {
        document.querySelector('body').style.backgroundImage = "url(../img/Morning.png)";
    }
    if(currentTime > 12 && currentTime < 18) {
        document.querySelector('body').style.backgroundImage = "url(../img/day.png)";
    }
    if(currentTime > 18) {
        document.querySelector('body').style.backgroundImage = "url(../img/evening.png)";
    }
}

export{ changeBack }