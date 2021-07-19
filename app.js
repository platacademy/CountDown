const countdown = () => {
    const countDate = new Date("July 23, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //introducing variables (Milisecond)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    //calcute
    const textHour = Math.floor(gap / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Update html
    document.getElementById("hour").innerHTML = textHour;
    document.getElementById("minute").innerHTML = textMinute;
    document.getElementById("second").innerHTML = textSecond;
    
};
setInterval(countdown, 1000);