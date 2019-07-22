var weekdays;
(function (weekdays) {
    weekdays[weekdays["Sunday"] = 1] = "Sunday";
    weekdays[weekdays["Monday"] = 2] = "Monday";
    weekdays[weekdays["TuesDay"] = 3] = "TuesDay";
    weekdays[weekdays["Wednesday"] = 4] = "Wednesday";
    weekdays[weekdays["Thursday"] = 5] = "Thursday";
    weekdays[weekdays["Friday"] = 6] = "Friday";
    weekdays[weekdays["Saturday"] = 7] = "Saturday";
})(weekdays || (weekdays = {}));
function onDmeo(days) {
    switch (days) {
        case weekdays.Sunday:
            console.log("Sunday");
            break;
        case weekdays.Monday:
            console.log("Monday");
            break;
        case weekdays.TuesDay:
            console.log("TuesDay");
            break;
        case weekdays.Wednesday:
            console.log("Wednesday");
            break;
        case weekdays.Thursday:
            console.log("Thurday");
            break;
        case weekdays.Friday:
            console.log("Friday");
            break;
        case weekdays.Saturday:
            console.log("Saturday");
            break;
    }
}
onDmeo(weekdays.Saturday);
