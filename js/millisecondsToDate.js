function milToDate(input) {
    const trueInput = input*1000
    let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    let newDay = new Date(trueInput).getDay();
    let a = day[newDay];
    return a;
}
export { milToDate }