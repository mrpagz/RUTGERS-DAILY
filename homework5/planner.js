// displays in format Wednesday, December 4th, 2019
$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    //console.log(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
});

// Save buttons for each hour.  The origin textarea id is passed with the appointment details
$("#saveBtnNine").click(function () {
    //console.log("user clicked to save 9am appointment");
    var appointmentTimeSlot = "#textareaNine";
    var appointmentDetails = document.getElementById('textareaNine').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule(); // THis works pretty well
});

$("#saveBtnTen").click(function () {
    //console.log("user clicked to save 10am appointment");
    var appointmentTimeSlot = "#textareaTen";
    var appointmentDetails = document.getElementById('textareaTen').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnEleven").click(function () {
    //console.log("user clicked to save 11am appointment");
    var appointmentTimeSlot = "#textareaEleven";
    var appointmentDetails = document.getElementById('textareaEleven').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwelve").click(function () {
    //console.log("user clicked to save 12pm appointment");
    var appointmentTimeSlot = "#textareaTwelve";
    var appointmentDetails = document.getElementById('textareaTwelve').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnOne").click(function () {
    //console.log("user clicked to save 1pm appointment");
    var appointmentTimeSlot = "#textareaOne";
    var appointmentDetails = document.getElementById('textareaOne').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwo").click(function () {
    //console.log("user clicked to save 2pm appointment");
    var appointmentTimeSlot = "#textareaTwo";
    var appointmentDetails = document.getElementById('textareaTwo').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnThree").click(function () {
    //console.log("user clicked to save 3pm appointment");
    var appointmentTimeSlot = "#textareaThree";
    var appointmentDetails = document.getElementById('textareaThree').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFour").click(function () {
    //console.log("user clicked to save 4pm appointment");
    var appointmentTimeSlot = "#textareaFour";
    var appointmentDetails = document.getElementById('textareaFour').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFive").click(function () {
    //console.log("user clicked to save 5pm appointment");
    var appointmentTimeSlot = "#textareaFive";
    var appointmentDetails = document.getElementById('textareaFive').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

// This function takes the new appointment and adds to schedule array.
function bookAppointment(time, details) {

    const newAppointment = { // an appointment object - using const unlike variable this does not change
        time: time, // Time of appointment
        title: details // Details from appointmenmt text area
    }
  
    // Create array to store task details
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    //console.log(scheduleArray);

    // Remove any appointments previosly scheduled at the same time as new appointment.
    scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppointment.time);
    //console.log(scheduleArray);

    // add new appointment to Schedule Array
    scheduleArray.push(newAppointment);
  

    // Update local storage with revised highScoresArray
    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
    //console.log(scheduleArray);
}

// Write the schedule array to html
function writeToSchedule() {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    // Use .map to sort out time and details from the Schedule Array
    scheduleArray.map(newAppointment => {
        //console.log("Writing to schedule")
        if (newAppointment.title != 0) {

            $(newAppointment.time).html(newAppointment.title);
        }
        //console.log("The new appointment: " + newAppointment.title + " is at ... " + newAppointment.time);
    });
}

// Time moments for changing colors of rows
var scheduleArray = [];
var time = moment();
var format = 'hh:mma';
var resetTime = moment('12:00am', format);
var nineBeginningTime = moment('9:00am', format);
var nineEndTime = moment('10:00am', format);
var tenBeginningTime = moment('10:00am', format);
var tenEndTime = moment('11:00am', format);
var elevenBeginningTime = moment('11:00am', format);
var elevenEndTime = moment('11:59am', format);
var twelveBeginningTime = moment('12:00pm', format);
var twelveEndTime = moment('12:59pm', format);
var oneBeginningTime = moment('1:00pm', format);
var oneEndTime = moment('1:59pm', format);
var twoBeginningTime = moment('2:00pm', format);
var twoEndTime = moment('2:59pm', format);
var threeBeginningTime = moment('3:00pm', format);
var threeEndTime = moment('3:59pm', format);
var fourBeginningTime = moment('4:00pm', format);
var fourEndTime = moment('4:59pm', format);
var fiveBeginningTime = moment('5:00pm', format);
var fiveEndTime = moment('5:59pm', format);

// This function controls changing the colors of the rows as each hour passes.  It is set to update every second.
setInterval(function () {
    checkTime();
}, 1000);

function checkTime() {
    
    if (time.isBefore(nineBeginningTime)) {
        // console.log('Tis before 1pm hour');
        $('#userInput9 ').css('background', '#77dd77');
    }
    if (time.isBetween(nineBeginningTime, nineEndTime)) {
        // console.log('Tis is the 9am hour');
        $('#userInput9').css('background', '#ff6961');
    }
    if (time.isAfter(nineEndTime)) {
        // console.log('Tis after the 9am hour');
        $('#userInput9').css('background', '#d3d3d3');
    }
    if (time.isBefore(tenBeginningTime)) {
        // console.log('Tis before 10am hour');
        $('#userInput10').css('background', '#77dd77');
    }
    if (time.isBetween(tenBeginningTime, tenEndTime)) {
        // console.log('Tis is the 10am hour');
        $('#userInput10').css('background', '#ff6961');
    }
    if (time.isAfter(tenEndTime)) {
        // console.log('Tis after the 10am hour');
        $('#userInput10').css('background', '#d3d3d3');
    }
    if (time.isBefore(elevenBeginningTime)) {
        // console.log('Tis before the 11am hour');
        $('#userInput11').css('background', '#77dd77');
    }
    if (time.isBetween(elevenBeginningTime, elevenEndTime)) {
        // console.log('Tis is the 11am hour');
        $('#userInput11').css('background', '#ff6961');
    }
    if (time.isAfter(elevenEndTime)) {
        // console.log('Tis before the 11am hour');
        $('#userInput11').css('background', '#d3d3d3');
    }
    if (time.isBefore(twelveBeginningTime)) {
        // console.log('Tis before 12pm hour');
        $('#userInput12').css('background', '#77dd77');
    }
    if (time.isBetween(twelveBeginningTime, twelveEndTime)) {
        // console.log('Tis is the 12pm hour');
        $('#userInput12').css('background', '#ff6961');
    }
    if (time.isAfter(twelveEndTime)) {
        // console.log('Tis after the 12pm hour');
        $('#userInput12').css('background', '#d3d3d3');
    }
    if (time.isBefore(oneBeginningTime)) {
        // console.log('Tis before 1pm hour');
        $('#userInput1').css('background', '#77dd77');
    }
    if (time.isBetween(oneBeginningTime, oneEndTime)) {
        // console.log('Tis is the 1pm hour');
        $('#userInput1').css('background', '#ff6961');
    }
    if (time.isAfter(oneEndTime)) {
        // console.log('Tis after the 1pm hour');
        $('#userInput1').css('background', '#d3d3d3');
    }
    if (time.isBefore(twoBeginningTime)) {
        // console.log('Tis before 2pm hour');
        $('#userInput2').css('background', '#77dd77');
    }
    if (time.isBetween(twoBeginningTime, twoEndTime)) {
        // console.log('Tis is the 2pm hour');
        $('#userInput2').css('background', '#ff6961');
    }
    if (time.isAfter(twoEndTime)) {
        // console.log('Tis after the 2pm hour');
        $('#userInput2').css('background', '#d3d3d3');
    }
    if (time.isBefore(threeBeginningTime)) {
        // console.log('Tis before 3pm hour');
        $('#userInput3').css('background', '#77dd77');
    }
    if (time.isBetween(threeBeginningTime, threeEndTime)) {
        // console.log('Tis is the 3pm hour');
        $('#userInput3').css('background', '#ff6961');
    }
    if (time.isAfter(threeEndTime)) {
        // console.log('Tis after the 3pm hour');
        $('#userInput3').css('background', '#d3d3d3');
    }
    if (time.isBefore(fourBeginningTime)) {
        // console.log('Tis before 4pm hour');
        $('#userInput4').css('background', '#77dd77');
    }
    if (time.isBetween(fourBeginningTime, fourEndTime)) {
        // console.log('Tis is the 4pm hour');
        $('#userInput4').css('background', '#ff6961');
    }
    if (time.isAfter(fourEndTime)) {
        // console.log('Tis after the 4pm hour');
        $('#userInput4').css('background', '#d3d3d3');
    }
    if (time.isBefore(fiveBeginningTime)) {
        // console.log('Tis before 5pm hour');
        $('#userInput5').css('background', '#77dd77');
    }
    if (time.isBetween(fiveBeginningTime, fiveEndTime)) {
        // console.log('Tis is the 5pm hour');
        $('#userInput5').css('background', '#ff6961');
    }
    if (time.isAfter(fiveEndTime)) {
        // console.log('Tis after the 5pm hour');
        $('#userInput5').css('background', '#d3d3d3');
    }
    if (time.isBetween(resetTime, nineBeginningTime)) {
        // console.log('The time is before work hours'); 
        $('#userInput9').css('background', '#77dd77');
        $('#userInput10').css('background', '#77dd77');
        $('#userInput11').css('background', '#77dd77');
        $('#userInput12').css('background', '#77dd77');
        $('#userInput1').css('background', '#77dd77');
        $('#userInput2').css('background', '#77dd77');
        $('#userInput3').css('background', '#77dd77');
        $('#userInput4').css('background', '#77dd77');
        $('#userInput5').css('background', ' #77dd77');
    }
};