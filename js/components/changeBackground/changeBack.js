function changeBack(){
    const currentTime = new Date().getHours();
    if(currentTime < 6) {
        document.querySelector('body').style.backgroundImage = "url(../img/Night.png)";
    }
    if(currentTime > 6 && currentTime < 12) {
        document.querySelector('body').style.backgroundImage = "url(../img/Morning.png)";
    }
    if(currentTime > 12 && currentTime < 17) {
        document.querySelector('body').style.backgroundImage = "url(../img/DayTime.png)";
    }
    if(currentTime > 18) {
        document.querySelector('body').style.backgroundImage = "url(../img/Evening.png)";
    }
}

export{ changeBack }