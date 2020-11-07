$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    writeToSchedule();
    
});
// event listener when save button is clicked
$("#saveBtnNine").click(function () {
    var taskTimeSlot = "#textareaNine";
    var taskDetails = document.getElementById('textareaNine').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
    console.log(writeToSchedule); 
});

$("#saveBtnTen").click(function () {
    var taskTimeSlot = "#textareaTen";
    var taskDetails = document.getElementById('textareaTen').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnEleven").click(function () {
    var taskTimeSlot = "#textareaEleven";
    var taskDetails = document.getElementById('textareaEleven').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnTwelve").click(function () {
    var taskTimeSlot = "#textareaTwelve";
    var taskDetails = document.getElementById('textareaTwelve').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnOne").click(function () {
    var taskTimeSlot = "#textareaOne";
    var taskDetails = document.getElementById('textareaOne').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnTwo").click(function () {
    var taskTimeSlot = "#textareaTwo";
    var taskDetails = document.getElementById('textareaTwo').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnThree").click(function () {
    var taskTimeSlot = "#textareaThree";
    var taskDetails = document.getElementById('textareaThree').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnFour").click(function () {
    var taskTimeSlot = "#textareaFour";
    var taskDetails = document.getElementById('textareaFour').value;
    bookAppointment(taskTimeSlot, taskDetails);
    writeToSchedule();
});

$("#saveBtnFive").click(function () {
    var taskTimeSlot = "#textareaFive";
    var taskDetails = document.getElementById('textareaFive').value;
    bookAppointment(taskTimeSlot, taskDetails);
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
    

    // Remove any appointments previosly scheduled at the same time as new appointment.
    scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppointment.time);
    

    // add new appointment to Schedule Array
    scheduleArray.push(newAppointment);
  

    // Update local storage with revised task details
    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
    
}

// Declare function
function writeToSchedule() {
    // retrieving data stored in local storage (needs detailed explaination with tutor)
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    // Use .map to sort out time and details from the Schedule Array
    scheduleArray.map(newAppointment => {
        //console.log("Writing to schedule")
        if (newAppointment.title != 0) {

            $(newAppointment.time).html(newAppointment.title);
        }
        console.log("The new appointment: " + newAppointment.title + " is at ... " + newAppointment.time);
    });
}
// HEEEEEELLLLLLLLLLPPPPPP!! I dont know how to make changes on the change of color when task has passed