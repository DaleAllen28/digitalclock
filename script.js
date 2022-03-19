                            /*!!DATE!!*/
const showDate = () => {
    /* --DATE VARIABLES -- */
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
   /* let dateFormat = `${day}, ${month + 1}, ${year}`;*/
    let monthArray = ["January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];
    
    let monthName = monthArray[month];

    let date2 = `${monthName} ${day}, ${year}`;

    document.getElementById("date").innerHTML = date2;
};


                            /*!!TIME!!*/

/*Appends a 0 onto the time value if the value is a single digit less than 10*/
const updateTime = (digit) => {
    if(digit<10){
        return "0" + digit;
    }else{
        return digit;
    }
};

const currentTime = () => {
    let currentDate = new Date();/*date object used to work with dates and times*/
    let hours = currentDate.getHours(); /*returns the hour (0 to 23) of a date*/
    let minutes = currentDate.getMinutes();/*returns minutes (0 to 59) of a date*/
    let seconds = currentDate.getSeconds();/*returns seconds (0 to 59) of a date*/

    hours = updateTime(hours); /*updates hours if single digit*/
    minutes = updateTime(minutes); /*updates miuntes if single digit*/
    seconds = updateTime(seconds); /*updates seconds if single digit*/
    let time = `${hours}:${minutes}:${seconds}`; /*output time together*/

    document.getElementById("time").innerHTML = time;/*Output time using DOM*/

    /*let t = setTimeout(currentTime, 1000);*/
    var t = setTimeout(currentTime, 1000);/*Executes function after 1000 milliseconds*/
};

document.addEventListener("DOMContentLoaded", showDate);
document.addEventListener("DOMContentLoaded", currentTime);
/*currentTime();*/

