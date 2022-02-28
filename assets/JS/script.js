let currentDayEl = $("#currentDay")

$(document).ready(function() {



$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".description").val();
    let timeEl = $(this).parent().attr("id");
    localStorage.setItem(timeEl, value);
});

function checkTime() {
    let currentTime = moment().hours()
    $(".time-block").each(function(){
        let block = parseInt($(this).attr("id").split("-")[1]);
    
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
checkTime()
setInterval(checkTime, 10000)

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


function displayTime() {
    let rightNow = moment().format("MMM DD, YYYY [at] hh:mm a");
    currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);

})