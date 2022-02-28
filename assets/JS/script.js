// Setting global variable to be called during the displayTime function for the top of the page
let currentDayEl = $("#currentDay")


// Ensures that the HTML is ready before calling any JS functions
$(document).ready(function() {


// When saveBtn is clicked, value will call a sister element of description and store its value while the timeEl calls the parents element and calls the ID specifically for local storage
$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".description").val();
    let timeEl = $(this).parent().attr("id");
    localStorage.setItem(timeEl, value);
});

// checkTime contains the JS that will check each time block class and will assign the past, present, future classes for coloration
function checkTime() {
    // Checks the current hour and returns a single number
    let currentTime = moment().hours()

    // for each timeBlock, this function turns the id "hour-#" from a string to an integery, while removing the "-" and calling the # of the hour specifically.
    $(".time-block").each(function(){
        let block = parseInt($(this).attr("id").split("-")[1]);
    
    // list of if/else statements that check if any block is less than, equal to, or greater than the current time and assigns and removes the appropriate classes for the time
    if (block < currentTime) {
        $(this).addClass("past");
    }
    else if (block === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}
// Calls the CheckTime function
checkTime()

// Every 10 seconds the checkTime function will re-run, allowing a fairly reliable calendar system that does not need to run multiple times a minute
setInterval(checkTime, 10000)


// List of hours and descipritons that will be called from local-storage for each individual text-area
$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
$("#hour-18 .description").val(localStorage.getItem("hour-18"))

// Display function that pastes the time at the top of the page
function displayTime() {
    let rightNow = moment().format("MMM DD, YYYY [at] hh:mm a");
    currentDayEl.text(rightNow);
}
// Interval for how often the header time gets refreshed. 
setInterval(displayTime, 1000);

})