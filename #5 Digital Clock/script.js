window.addEventListener('load', calculatetime);

function calculatetime() {
    const date = new Date();

    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var daynames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;


    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    sec = sec < 10 ? '0' + sec : sec;


    document.getElementById("day").innerHTML = daynames[day];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculatetime, 1000);
}
