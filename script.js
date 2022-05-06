                            /*!!DATE!!*/
    /*GLOBAL VARIABLES*/
/* --DATE VARIABLES -- */
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let date = `${day}, ${month + 1}, ${year}`;
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
let date2 = `${day} ${monthName}, ${year}`;//

//DOM ACCESS VARIABLES

const dateDisplay = document.getElementById("date");

const dateButton = document.getElementById("toggleFormatBtn");

const timeButton = document.getElementById("toggleTimebtn")

const timeDisplay = document.getElementById("time");


/*--DISPLAY DATE FUNCTION (to be called on content loaded)--*/
const showDate = () => {
    dateDisplay.innerHTML = date2;
};

/* --TOGGLE DATE FUNCTION */
const toggleDate = () => {
    //Check if dateDisplay is not equal to the value of the date variable
    if (dateDisplay.innerHTML != date) {
        dateDisplay.innerHTML = date; // if not, set dateDisplay innerHTML to the value of the Date variable
    } else {
        dateDisplay.innerHTML = date2; // else set it to the value of date2 variable
    };
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

/*UPDATE CURRENT TIME FUNCTION*/
const currentTime = () => {
    let currentDate = new Date();/*date object used to work with dates and times*/
    let hours = currentDate.getHours(); /*returns the hour (0 to 23) of a date*/
    let minutes = currentDate.getMinutes();/*returns minutes (0 to 59) of a date*/
    let seconds = currentDate.getSeconds();/*returns seconds (0 to 59) of a date*/


    hours = updateTime(hours); /*updates hours if single digit*/
    minutes = updateTime(minutes); /*updates miuntes if single digit*/
    seconds = updateTime(seconds); /*updates seconds if single digit*/
    let time = `${hours}:${minutes}:${seconds}`; /*output time together*/

    timeDisplay.innerHTML = time;/*Output time using DOM*/

    setTimeout(currentTime, 1000);/*Executes whole currentTime function after 1000 milliseconds*/
};


/*EVENT LISTENERS*/
document.addEventListener("DOMContentLoaded", showDate); /*Runs Display dat efunction on load*/
document.addEventListener("DOMContentLoaded", currentTime);/*runs current time function on load*/

dateButton.addEventListener("click", toggleDate);
