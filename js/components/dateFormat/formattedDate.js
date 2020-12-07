function formatDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const currentDate = new Date();
    const formattedDate = day[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + ' ' + currentDate.getDate()+ 'th';
    return formattedDate;

}

export { formatDate }