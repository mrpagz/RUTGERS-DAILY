// var _Container = document.getElementById('timeDivs')

// Adding time to the planner
$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    writeToSchedule();
    
});


var Container = $(".container")
var currentHour = parseInt(moment().format("H"))
var schedule = JSON.parse(localStorage.getItem("schedule")) || {}
var start_hour = 8;
var end_hour = 17;

for (var i = start_hour; i <= end_hour; i++) {
    Row(i)
}

function Row(hour) {
    var time = moment(hour, "H")
    var display = time.format("hA")
    var timeclass = "past";

    if (hour === currentHour) {
        timeclass = "present"
    } else if (currentHour < hour) {
        timeclass = "future"
    }

    // var _parent = document.createElement('div')
    // _parent.classList.add('time-block', 'row');   
    var parent = $("<div>")
        .addClass('time-block row')

    // var _hourEl = document.createElement('div')
    // _hourEl.classList.add('col-1', 'hour')
    // _hourEl.textContent = display
    var hourEl = $("<div>")
        .addClass('col-1 hour')
        .text(display)

    // var _textarea = document.createElement('textarea')
    // _textarea.classList.add('col-10', 'description', timeclass)
    // _textarea.value = schedule[display]
    var textarea = $('<textarea>')
        .addClass('col-10 description')
        .addClass(timeclass)
        .val(schedule[display])

    // var _saveBtn = document.createElement('button')
    // _saveBtn.classList.add('col-1', 'saveBtn')
    // _saveBtn.addEventListener('click', clickBtn)
    var saveBtn = $("<button>")
        .addClass('col-1 saveBtn')
        .click(clickBtn)

    // var _i = document.createElement('i')
    // _i.classList.add('fas', 'fa-save')
    var icon = $("<i>")
        .addClass('fas fa-save')

    // _saveBtn.appendChild(_i)
    // _parent.appendChild(_hourEl)
    // _parent.appendChild(_textarea)
    // _parent.appendChild(_saveBtn)
    // _Container.appendChild(_parent)
    saveBtn.append(icon)
    parent.append(hourEl, textarea, saveBtn)
    Container.append(parent)
}

function clickBtn() {
    var parent = $(this).parent()
    var hour = parent.find('.hour').text()
    var text = parent.find('.description').val()

    schedule[hour] = text;
    localStorage.setItem('schedule', JSON.stringify(schedule))
}

// var arr = [0, 1, 2, 3]
// var obj = {
//     a: "A",
//     b: "B",
//     c: "C",
// }

// obj.d = "D"
// obj['e'] = "E"

// var i = 3

// console.log(arr)
// console.log(arr[2])
// console.log(arr[i])
// console.log(obj)
// console.log(obj.b)
// console.log(obj['c'])

// var key = 'name'
// console.log(obj[key])

