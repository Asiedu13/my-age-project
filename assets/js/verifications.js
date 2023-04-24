
const verifyValues = (goodDay, goodMonth, goodYear) => {
    let retVal = false;
    if (goodDay.length > 0 || goodMonth.length > 0 || goodYear.length > 0) {
        retVal = false;
    }else {
        retVal = true;
    }
    return retVal;
}
const verifyDay = (dayInput) => {
    let retVal = ''
    let day = Number.parseInt(dayInput)
    if (Number.isInteger(day)) {
        if (day < 1 || day > 31 ) {
            retVal = 'Must be a valid day'
        }
    } else {
        retVal = ''
    }

    return retVal
}

const verifyMonth = (monthInput) => {
    let retVal = ''
    let month = Number.parseInt(monthInput)
    if (Number.isInteger(month)) {
        if (month < 1 || month > 12 ) {
            retVal = 'Must be a valid month'
        }
    }else {
        retVal = ''
    }

    return retVal
}

const verifyYear = (yearInput) => {
    let retVal = ''
    let year = Number.parseInt(yearInput)
    if (Number.isInteger(year)) {
        if (year < 1900 || year > new Date().getFullYear() ) {
            retVal = 'Must be a valid year'
        }
    }else {
        retVal = ''
    }

    return retVal
}
