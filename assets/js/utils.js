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
