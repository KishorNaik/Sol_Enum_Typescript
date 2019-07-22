enum weekdays {
  Sunday = 1,
  Monday = 2,
  TuesDay = 3,
  Wednesday = 4,
  Thursday = 5,
  Friday = 6,
  Saturday = 7
}

function onDmeo(days: weekdays): void {
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
