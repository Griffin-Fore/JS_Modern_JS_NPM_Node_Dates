import  dayjs from 'dayjs'

// In formatDate.js, create and export a function that takes an ISO date, like 2023-01-01T12:34:56Z, 
// and returns a readable string as an output (e.g. January 1, 2023, 12:34:56 PM UTC).

const dateAsReadableString = date => {
    const dateNow = dayjs(date).format("MMMM D, YYYY, h:m:ss A"); //convert the date
    return `${dateNow} UTC`
}

// Have a function for converting date formats to appear like "4 months ago"
const amountTimePassedInMonths = (pastDate, currentDate) => {
    const pastDateYear = dayjs(pastDate).year(); // format the time in year plus month,
    const pastDateMonth = dayjs(pastDate).month();
    const pastMonths = pastDateYear * 12 + pastDateMonth // convert the time to an integer, multiply the year by 12 and add the month
    const currentDateYear = dayjs(currentDate).year(); // format the time in year plus month,
    const currentDateMonth = dayjs(currentDate).month();
    const currentMonths = currentDateYear * 12 + currentDateMonth // convert the time to an integer, multiply the year by 12 and add the month
    const monthsPassed = currentMonths - pastMonths; // subtract the pastdate from the current date
    return `${monthsPassed} months ago`
}
// Have a function for converting date formats to appear like "Thursday, January 21, 2023"
const dayMonthYear = date => {
    const dayOfWeekNumber = dayjs(date).day();
    const dayOfWeek = (dayOfWeekIndex) => {
        if(dayOfWeekIndex === 0) {
            return "Monday"
        }
        else if(dayOfWeekIndex === 1) {
            return "Tuesday"
        }
        else if(dayOfWeekIndex === 2) {
            return "Wednesday"
        }
        else if(dayOfWeekIndex === 3) {
            return "Thursday"
        }
        else if(dayOfWeekIndex === 4) {
            return "Friday"
        }
        else if(dayOfWeekIndex === 5) {
            return "Saturday"
        }
        else {
            return "Sunday"
        }
    }
    const formattedDate = dayjs(date).format("MMMM D, YYYY");
    return `${dayOfWeek(dayOfWeekNumber)}, ${formattedDate}`
}

// Have a function for converting date formats to appear like "01/21/2023"
const mmddyyyy = date => dayjs(date).format("MM/DD/YYYY");

export {
    dateAsReadableString,
    amountTimePassedInMonths,
    dayMonthYear,
    mmddyyyy
}