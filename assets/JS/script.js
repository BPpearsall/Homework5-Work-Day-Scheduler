let currentDayEl = $("#currentDay")

function displayTime() {
    let rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);
