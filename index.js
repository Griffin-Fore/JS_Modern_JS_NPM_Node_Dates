import {
    dateAsReadableString,
    amountTimePassedInMonths,
    dayMonthYear,
    mmddyyyy
} from './utils/formatDate.js'

// ^^^^^^^^^^^^^^^^^^^^^^^^^^
// figure out how to import the formatDate.js

import  dayjs from 'dayjs'
// Load in the date
const now = dayjs()
const date2 = dayjs('05/02/69 1:02:03 PM -05:00').format('MM/DD/YY H:mm:ss A Z')
const date3 = dayjs('06/07/95 2:33:43 AM -05:00').format('MM/DD/YY H:mm:ss A Z')
const date4 = dayjs('11/11/21 7:00:00 AM -05:00').format('MM/DD/YY H:mm:ss A Z')
const date5 = dayjs('01/01/23 11:11:11 AM -05:00').format('MM/DD/YY H:mm:ss A Z')

// console the date
console.log(now);

// console dateAsReadableString with date
console.log('dateAsReadableString: ', dateAsReadableString(now));
console.log('dateAsReadableString 2: ', dateAsReadableString(date2));
console.log('dateAsReadableString 3: ', dateAsReadableString(date3));
console.log('dateAsReadableString 4: ', dateAsReadableString(date4));
console.log('dateAsReadableString 5: ', dateAsReadableString(date5));

// console amountTimePassed with the date and a past date
const pastDate = dayjs('2022-01-15');
console.log('amountTimePassed:', amountTimePassedInMonths(pastDate, now));
console.log('amountTimePassed 2:', amountTimePassedInMonths(date2, now));
console.log('amountTimePassed 3:', amountTimePassedInMonths(date3, now));
console.log('amountTimePassed 4:', amountTimePassedInMonths(date4, now));
console.log('amountTimePassed 5:', amountTimePassedInMonths(date5, now));

// console dayMonthYear with date
console.log('dayMonthYear: ', dayMonthYear(now));
console.log('dayMonthYear 2: ', dayMonthYear(date2));
console.log('dayMonthYear 3: ', dayMonthYear(date3));
console.log('dayMonthYear 4: ', dayMonthYear(date4));
console.log('dayMonthYear 5: ', dayMonthYear(date5));

// console mmddyyyy with date\
console.log('mmddyyyy: ', mmddyyyy(now))
console.log('mmddyyyy 2: ', mmddyyyy(date2))
console.log('mmddyyyy 3: ', mmddyyyy(date3))
console.log('mmddyyyy 4: ', mmddyyyy(date4))
console.log('mmddyyyy 5: ', mmddyyyy(date5))