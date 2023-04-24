// ------ DaysLived Computation
function convertmili( mSeconds ){
    // var checkYear = Math.floor(mSeconds / 31536000000);
    var one_day=1000*60*60*24
    let days = Math.floor(mSeconds / one_day);
    return days;
}


function modInfo(days, n) {
    return {wholeValue: Math.floor(days / n), remainder: days % n}
}

function yearsLivedCalc(days) {
    return {wholeValue: Math.floor(days / 365), remainder: days % 365}
}

function monthsLivedCalc(month) {
    let currentMonth = new Date().getMonth() + 1;
    let monthsLived = 0;
    if (currentMonth == month) {
         monthsLived = 0
    }else if (currentMonth < month) {
        monthsLived = currentMonth;
    }else {
        monthsLived = currentMonth - month;
    }

    return monthsLived;
}

function daysLivedCalc(day) {
    let currentDay = new Date().getDate();
    let daysLived = 0;
    if (currentDay == day) {
        daysLived = 0
   }else if (day < currentDay) {
       daysLived = currentDay;
   }else {
       daysLived = day - currentDay;
   }
   return daysLived;
}

// ------- Get input values

const getInputValues = (arr) => {
    let values = []
     arr.forEach(e => {
        values.push(e.value)
     })
     return values;
}



// ---- Value verification functions ---------

const if_empty = (arr) => {
    let retarr = []
    let temp = false
    let any = false;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length == 0 ) {
           temp = 'The field is required'
            any = true;
        }else {
            temp = ""
        }
        retarr.push(temp)
    }
    return {anyEmpty: any, retarr: retarr}

}

const verifyValues = (goodDay, goodMonth, goodYear) => {
   
    let retVal = false;
    if (goodDay.length > 0 || goodMonth.length > 0 || goodYear.length > 0) {
        err_display([goodDay, goodMonth, goodYear])
    }else {
        correct_display([goodDay, goodMonth, goodYear])

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

const err_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.add('text-error')
    })
}

const correct_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.remove('text-error')
    })
}
